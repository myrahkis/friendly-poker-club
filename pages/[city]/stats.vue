<script setup>
const { rawData: stats } = useCityData("stats");

const route = useRoute();
const citySlug = computed(() => route.params.city);
const openFullscreenAllCities = ref(false);
const openFullscreenRealtime = ref(false);
const openPointsRules = ref(false);
const pointsRulesContainer = ref(null);

useHead({
  title: "Статистика покерного клуба Friendly Poker",
  meta: [
    {
      name: "description",
      content:
        "Статистика покерного клуба Friendly Poker (по всем городам Москва, Рязань и др.), статистика турниров в реальном времени.",
    },
    {
      property: "og:url",
      content: computed(
        () => `https://friendlypoker.ru/${citySlug.value}/stats`
      ),
    },
  ],
});

function openFullscreenAllCitiesHandle() {
  openFullscreenAllCities.value = true;
}
function closeFullscreenAllCitiesHandle() {
  openFullscreenAllCities.value = false;
}
function openFullscreenRealtimeHandle() {
  openFullscreenRealtime.value = true;
}
function closeFullscreenRealtimeHandle() {
  openFullscreenRealtime.value = false;
}

function toggleRules() {
  openPointsRules.value = !openPointsRules.value;

  if (openPointsRules.value) {
    nextTick(() => {
      if (
        pointsRulesContainer.value &&
        pointsRulesContainer.value.scrollIntoView
      ) {
        pointsRulesContainer.value.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
}
</script>

<template>
  <section class="stats-sections">
    <h2>Статистика покерного клуба Friendly Poker</h2>
    <div class="stats-container">
      <div>
        <div class="heading-container">
          <h3 class="stats-heading">
            Статистика по всем городам (Москва, Рязань и др.)
          </h3>
          <div class="stats-btns-container">
            <button class="points-rules-btn" @click="toggleRules">
              Система начисления баллов
            </button>
            <button
              class="fullscreen-btn u-shimmering-gradient-hover"
              @click="openFullscreenAllCitiesHandle"
            >
              Открыть лидерборд
            </button>
          </div>
        </div>
        <div v-if="openFullscreenAllCities" class="fullscreen-bg"></div>
        <div :class="['iframe-wrap', { fullscreen: openFullscreenAllCities }]">
          <iframe
            :class="{
              'stats-dashboard': true,
              fullscreen: openFullscreenAllCities,
            }"
            frameborder="0"
            :src="stats?.dashboardMain"
          ></iframe>
          <button
            v-if="openFullscreenAllCities"
            class="close-fullsceen-btn"
            @click="closeFullscreenAllCitiesHandle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="2.5rem"
              height="2.5rem"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="currentColor"
                  d="M 20.7457 3.32851 C 20.3552 2.93798 19.722 2.93798 19.3315 3.32851 L 12.0371 10.6229 L 4.74275 3.32851 C 4.35223 2.93798 3.71906 2.93798 3.32854 3.32851 C 2.93801 3.71903 2.93801 4.3522 3.32854 4.74272 L 10.6229 12.0371 L 3.32856 19.3314 C 2.93803 19.722 2.93803 20.3551 3.32856 20.7457 C 3.71908 21.1362 4.35225 21.1362 4.74277 20.7457 L 12.0371 13.4513 L 19.3315 20.7457 C 19.722 21.1362 20.3552 21.1362 20.7457 20.7457 C 21.1362 20.3551 21.1362 19.722 20.7457 19.3315 L 13.4513 12.0371 L 20.7457 4.74272 C 21.1362 4.3522 21.1362 3.71903 20.7457 3.32851 Z"
                />
              </g>
            </svg>
          </button>
        </div>
        <div
          v-if="openPointsRules"
          class="points-rules-container"
          ref="pointsRulesContainer"
        >
          <img
            class="point-rules-img"
            src="/assets/images/points-rules.webp"
            alt="points-rules"
            lazy
          />
          <div class="points-rules-texts">
            <h3 class="stats-heading">Методика начисления баллов</h3>
            <p>
              Количество баллов, которые игрок получает по итогам турнира,
              зависит от трёх основных факторов:
            </p>
            <ul class="points-rules-list">
              <li>
                <div class="rule-title">Занятое место:</div>
                <div class="rule-text">
                  Чем выше итоговое место в турнире, тем больше баллов
                  начисляется игроку.
                </div>
              </li>
              <li>
                <div class="rule-title">Количество участников:</div>
                <div class="rule-text">
                  Чем больше игроков (столов) участвует в турнире, тем выше
                  ценность каждого места и, соответственно, больше баллов за его
                  занятие.
                </div>
              </li>
              <li>
                <div class="rule-title">Формат турнира:</div>
                <div class="rule-text">
                  В некоторых форматах (например, турниры с Нокаутами или
                  Баунти) предусмотрены дополнительные бонусы. За каждого
                  выбитого Вами игрока начисляется +10 баллов.
                </div>
              </li>
            </ul>
            <p>
              Таким образом, максимальное количество баллов можно получить,
              заняв высокое место в крупном турнире с большим числом участников.
              В турнирах соответствующих форматов на итоговую сумму также влияет
              количество сделанных Вами нокаутов.
            </p>
            <p>
              Первые два фактора Вы можете самостоятельно рассчитать по таблице,
              приведённой ниже (см. таблицу). Третий фактор (бонусные баллы за
              нокауты или Баунти) рассчитывается и добавляется к результату
              после окончания Вашего участия в турнире.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="heading-container">
          <h3 class="stats-heading">
            Статистика турниров <br class="stats-br-mobile" />
            в реальном времени
          </h3>
          <button
            class="fullscreen-btn u-shimmering-gradient-hover"
            @click="openFullscreenRealtimeHandle"
          >
            Открыть лидерборд
          </button>
        </div>
        <div v-if="openFullscreenRealtime" class="fullscreen-bg"></div>
        <div :class="['iframe-wrap', { fullscreen: openFullscreenRealtime }]">
          <iframe
            :class="{
              'stats-dashboard': true,
              fullscreen: openFullscreenRealtime,
            }"
            frameborder="0"
            :src="stats?.dashboardRealTime"
          ></iframe>
          <button
            v-if="openFullscreenRealtime"
            class="close-fullsceen-btn"
            @click="closeFullscreenRealtimeHandle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="2.5rem"
              height="2.5rem"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="currentColor"
                  d="M 20.7457 3.32851 C 20.3552 2.93798 19.722 2.93798 19.3315 3.32851 L 12.0371 10.6229 L 4.74275 3.32851 C 4.35223 2.93798 3.71906 2.93798 3.32854 3.32851 C 2.93801 3.71903 2.93801 4.3522 3.32854 4.74272 L 10.6229 12.0371 L 3.32856 19.3314 C 2.93803 19.722 2.93803 20.3551 3.32856 20.7457 C 3.71908 21.1362 4.35225 21.1362 4.74277 20.7457 L 12.0371 13.4513 L 19.3315 20.7457 C 19.722 21.1362 20.3552 21.1362 20.7457 20.7457 C 21.1362 20.3551 21.1362 19.722 20.7457 19.3315 L 13.4513 12.0371 L 20.7457 4.74272 C 21.1362 4.3522 21.1362 3.71903 20.7457 3.32851 Z"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.up-btn {
  display: none;
}
.stats-sections {
  position: relative;
  padding: 0 var(--horiz-main-padding);
  padding-top: 10%;
}
.stats-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
.heading-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.fullscreen-btn {
  font-size: 1.8rem;
  width: fit-content;
  background: linear-gradient(
    to right,
    var(--light-gradient-color),
    var(--dark-gradient-color)
  );
  border-radius: 3rem;
  padding: 1rem 1.5rem;
}

.stats-heading {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.stats-dashboard {
  width: 100%;
  height: 100%;
  border-radius: 2rem;
}
.iframe-wrap {
  position: relative;
  height: 60rem;
  width: 100%;
}
.iframe-wrap.fullscreen {
  position: fixed;
  top: 2%;
  left: 50%;
  z-index: 10000;
  transform: translate(-50%, 0);
  width: calc(100% - (var(--horiz-main-padding) * 2));
  height: 95vh;
}
.fullscreen-bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.3);
  backdrop-filter: blur(3px);
}
.close-fullsceen-btn {
  position: fixed;
  display: inline-flex;
  top: 1rem;
  right: 1rem;
  z-index: 10001;
  padding: 1rem;
  border-radius: 50%;
  background-color: var(--dark-blue-color);
  transition: all 0.2s;

  svg {
    color: var(--light-gradient-color);
    width: clamp(1.5rem, 1rem + 2vw, 2.5rem);
    height: clamp(1.5rem, 1rem + 2vw, 2.5rem);
    transition: all 0.2s;
  }

  &:hover {
    background-color: var(--light-gradient-color);

    svg {
      color: var(--dark-blue-color);
    }
  }
}
.stats-br-mobile {
  display: none;
}

.stats-btns-container {
  display: flex;
  gap: 1rem;
}
.points-rules-btn {
  font-size: clamp(1.2rem, 0.8rem + 1vw, 1.8rem);
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  border: 1px solid var(--light-gradient-color);
  transition: all 0.2s;

  &:hover {
    background-color: var(--light-gradient-color);
    color: var(--dark-blue-color);
  }
}
.points-rules-container {
  display: flex;
  margin-top: 4rem;
  gap: 3rem;
}
.point-rules-img {
  width: 40rem;
}
.points-rules-texts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: fit-content;

  border: 2px solid transparent;
  border-radius: 2rem;
  background: linear-gradient(var(--dark-blue-color), var(--dark-blue-color))
      padding-box,
    linear-gradient(
        to right,
        var(--light-gradient-color),
        var(--dark-gradient-color)
      )
      border-box;
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  padding: 1rem 1.5rem;
}

.points-rules-heading {
  font-size: 3rem;
}
.points-rules-list {
  list-style: inside decimal;

  li {
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;
  }
}
.rule-title {
  display: inline-flex;
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
}
.rule-text {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  margin-left: 1.2em;
}

@media (max-width: 1420px) {
  .heading-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .stats-heading {
    margin: 0;
  }
  .fullscreen-btn {
    font-size: clamp(1.2rem, 0.8rem + 1vw, 1.8rem);
  }
  .stats-btns-container {
    width: 100%;
    justify-content: end;
  }
}
@media (max-width: 1030px) {
  .stats-heading {
    font-size: clamp(1.8rem, 3.3vw, 3rem);
  }
  .point-rules-img {
    width: 30rem;
  }
}
@media (max-width: 800px) {
  .stats-sections {
    padding-top: 15%;
  }
  .stats-dashboard {
    aspect-ratio: 9 / 16;
  }
  .points-rules-container {
    flex-direction: column-reverse;
    align-items: center;
  }
}
@media (max-width: 600px) {
  .stats-sections {
    padding-top: 25%;
  }
  .stats-btns-container {
    width: fit-content;
    margin-left: auto;
    flex-direction: column-reverse;
    align-items: end;
    gap: 0.5rem;
    margin-top: 1rem;
  }
}
@media (max-width: 420px) {
  .stats-br-mobile {
    display: block;
  }
  .point-rules-img {
    width: 100%;
  }
}
@media (max-width: 370px) {
  .stats-heading {
    font-size: clamp(1.6rem, 3.3vw, 1.8rem);
  }
}
</style>
