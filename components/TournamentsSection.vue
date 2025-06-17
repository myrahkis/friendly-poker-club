<script setup>
import { TournamentsDescriptions } from "#components";

const isDescriptionsOpen = ref(false);
const descriptionsContainer = ref(null);

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

    const dayObj = raw[fullName];
    const scheduleArr = [];

    if (dayObj && typeof dayObj === "object") {
      for (const key in dayObj) {
        if (Object.prototype.hasOwnProperty.call(dayObj, key)) {
          const entry = dayObj[key];

          scheduleArr.push(entry.name);
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

  const now = new Date();

  //переделаь
  const currentMonthFull = MONTH_NAMES[now.getMonth()].replace(/я$/, "ь");

  const monthlyObj = raw[currentMonthFull];
  if (monthlyObj && typeof monthlyObj === "object") {
    const scheduleArr = [];
    for (const key in monthlyObj) {
      if (!Object.prototype.hasOwnProperty.call(monthlyObj, key)) continue;
      const entry = monthlyObj[key];
      scheduleArr.push(entry.name);
    }

    result.push({
      date: currentMonthFull,
      dayOfWeek: "",
      // heading: "Турнир месяца",
      schedule: scheduleArr,
    });
  }

  return result;
}

// console.log(tournaments);

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
    // scheduleMidnightRefresh();
  } catch (err) {
    console.error(err);
    error.value = "Не удалось загрузить данные для города: " + cityName;
  } finally {
    loading.value = false;
  }
}

function toggleDescriptions() {
  isDescriptionsOpen.value = !isDescriptionsOpen.value;

  if (isDescriptionsOpen.value) {
    nextTick(() => {
      if (
        descriptionsContainer.value &&
        descriptionsContainer.value.scrollIntoView
      ) {
        descriptionsContainer.value.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
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
    <div class="tournaments-header">
      <h2>Расписание турниров</h2>
      <button class="tournaments-desc-btn" @click="toggleDescriptions">
        Описание турниров
      </button>
    </div>
    <!-- <p>({{ selectedCity }})</p> -->
    <div class="tournaments-grid" v-if="tournaments.length !== 0">
      <TournamentCard
        v-for="(tournament, index) in tournaments"
        :tournament="tournament"
        :key="index"
        :index="index"
        :lastIndex="tournaments.length - 1"
      />
    </div>
    <h4 v-else>Турниров в ближайшее время нет!</h4>
    <transition name="slide-down">
      <div v-if="isDescriptionsOpen" ref="descriptionsContainer">
        <TournamentsDescriptions />
      </div>
    </transition>
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
.tournaments-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tournaments-desc-btn {
  background-color: rgba(37, 37, 37, 0.3);
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  width: calc(25% - 1.5rem);
}

.tournaments-grid {
  display: grid;
  grid-template-columns: repeat(4, 0.25fr);
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

/* анимаия для открытия descriptions */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-down-enter-from {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.slide-down-enter-to {
  max-height: 100vh;
  opacity: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.slide-down-leave-from {
  max-height: 100vh;
  opacity: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

@media (max-width: 1400px) {
  .tournaments-grid {
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
  }
}

/* (1024px–1279px) */
@media (max-width: 1279px) {
}

/* (768px–1023px) */
@media (max-width: 1023px) {
  .tournaments-grid {
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
  }
}

@media (max-width: 600px) {
  .tournaments-grid {
    display: flex;
    flex-direction: column;
  }
}
</style>
