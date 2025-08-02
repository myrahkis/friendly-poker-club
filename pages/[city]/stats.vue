<script setup>
const { rawData: stats } = useCityData("stats");

const route = useRoute();
const citySlug = computed(() => route.params.city);

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
</script>

<template>
  <section class="stats-sections">
    <h2>Статистика покерного клуба Friendly Poker</h2>
    <div class="stats-container">
      <div>
        <h3 class="stats-heading">
          Статистика по всем городам (Москва, Рязань и др.)
        </h3>
        <iframe
          class="stats-dashboard"
          frameborder="0"
          :src="stats?.dashboardMain"
        ></iframe>
      </div>
      <div>
        <h3 class="stats-heading">
          Статистика турниров <br class="stats-br-mobile" />
          в реальном времени
        </h3>
        <iframe
          class="stats-dashboard"
          frameborder="0"
          :src="stats?.dashboardRealTime"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style>
.up-btn {
  display: none;
}
.stats-sections {
  padding: 0 var(--horiz-main-padding);
  padding-top: 10%;
}
.stats-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
.stats-heading {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 2rem;
}
.stats-dashboard {
  width: 100%;
  height: 60rem;
  border-radius: 2rem;
}
.stats-br-mobile {
  display: none;
}

@media (max-width: 950px) {
  .stats-heading {
    font-size: clamp(1.8rem, 3.3vw, 3rem);
  }
}
@media (max-width: 800px) {
  .stats-sections {
    padding-top: 15%;
  }
  .stats-dashboard {
    aspect-ratio: 9 / 16;
  }
}
@media (max-width: 600px) {
  .stats-sections {
    padding-top: 25%;
  }
}
@media (max-width: 420px) {
  .stats-br-mobile {
    display: block;
  }
}
@media (max-width: 370px) {
  .stats-heading {
    font-size: clamp(1.6rem, 3.3vw, 1.8rem);
  }
}
</style>
