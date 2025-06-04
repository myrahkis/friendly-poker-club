<script setup>
const route = useRoute();

const selectedCity = computed(() => {
  return route.query.city;
});

const loading = ref(false);
const error = ref(null);
const rawData = ref({});
const tournaments = ref([]);

const WEEKDAY_FULL = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const WEEKDAY_SHORT = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
const MONTH_NAMES = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

let midnightTimeout = null;

/**
 * данные из json в массив из 7 ближайших дней:
 * [{ date, dayOfWeek, schedule: {time, name} }, ...]
 */
function buildNext7DaysFromWeekdayJson(raw) {
  const result = [];
  const today = new Date();

  for (let offset = 0; offset < 7; offset++) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);

    const dayNumber = d.getDate();
    const monthName = MONTH_NAMES[d.getMonth()];
    const fullName = WEEKDAY_FULL[d.getDay()];
    const shortName = WEEKDAY_SHORT[d.getDay()];

    const dayObj = raw[fullName]
    const scheduleArr = [];

    if (dayObj && typeof dayObj === "object") {
      for (const key in dayObj) {
        if (Object.prototype.hasOwnProperty.call(dayObj, key)) {
          const entry = dayObj[key];

          scheduleArr.push({
            time: entry.time,
            name: entry.name,
          });
        }
      }
    }

    result.push({
      date: `${dayNumber} ${monthName}`,
      dayOfWeek: shortName,
      heading: scheduleArr.length ? "" : "— Нет турнира —",
      schedule: scheduleArr,
    });
  }

  return result;
}

/**
 * в полночь сдвигает список на одну дату
 */
function scheduleMidnightRefresh() {
  if (midnightTimeout) {
    clearTimeout(midnightTimeout);
    midnightTimeout = null;
  }

  const now = new Date();
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  const msUntilMidnight = nextMidnight.getTime() - now.getTime();

  midnightTimeout = setTimeout(() => {
    tournaments.value = buildNext7DaysFromWeekdayJson(rawData.value);
    scheduleMidnightRefresh();
  }, msUntilMidnight + 20);
}

/**
 * Загружает файл setver/data/{city}.json, парсинг
 */
async function loadCityData(cityName) {
  loading.value = true;
  error.value = null;
  rawData.value = {};
  tournaments.value = [];

  try {
    const module = await import(`@/server/data/${cityName}.json`);
    rawData.value = module.default || {};

    tournaments.value = buildNext7DaysFromWeekdayJson(rawData.value);
    scheduleMidnightRefresh();
  } catch (err) {
    console.error(err);
    error.value = "Не удалось загрузить данные для города: " + cityName;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadCityData(selectedCity.value);
});

watch(selectedCity, (newCity) => {
  loadCityData(newCity);
});
</script>

<template>
  <section class="tournaments-section">
    <h2>Расписание турниров</h2>
    <!-- <p>({{ selectedCity }})</p> -->
    <div class="tournaments-grid">
      <TournamentCard
        v-for="(tournament, index) in tournaments"
        :tournament="tournament"
        :key="index"
        :index="index"
        :lastIndex="tournaments.length - 1"
      />
    </div>
    <img class="bg-spades-img" src="/assets/images/bg-spades.png" alt="" />
    <img class="bg-diamonds-img" src="/assets/images/bg-diamonds.png" alt="" />
    <img class="bg-clubs-img" src="/assets/images/bg-clubs.png" alt="" />
  </section>
</template>

<style scoped>
.tournaments-section {
  position: relative;
  padding: 0 var(--horiz-main-padding);
}

.tournaments-grid {
  display: grid;
  grid-template-columns: repeat(4, 0.5fr);
  grid-template-rows: auto;
  gap: 1.5rem;
}

.bg-spades-img {
  position: absolute;
  top: 5rem;
  right: 11rem;
  z-index: -1;
  width: 20rem;
}
.bg-diamonds-img {
  position: absolute;
  top: 30rem;
  left: 23rem;
  z-index: -1;
  width: 15rem;
}
.bg-clubs-img {
  position: absolute;
  bottom: 0rem;
  right: 42rem;
  z-index: -1;
  transform: translateY(8rem);
  width: 20rem;
}

/* (1024px–1279px) */
@media (max-width: 1279px) {
  .tournaments-grid {
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
  }
}

/* (768px–1023px) */
/* @media (max-width: 1023px) {
  .tournaments-grid {
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
  }
} */

/* (480px–767px) */
@media (max-width: 767px) {
  .tournaments-grid {
    display: flex;
    flex-direction: column;
  }
}
</style>
