<script setup>
import { buildNext7DaysFromWeekdayJson } from "~/helpers/buildTournamentsArr";

const isDescriptionsOpen = ref(false);
const descriptionsContainer = ref(null);

const { loading, error, rawData } = useCityData("tournaments");

const tournaments = computed(() => {
  if (!rawData.value) return [];
  return buildNext7DaysFromWeekdayJson(rawData.value);
});

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
</script>

<template>
  <section class="tournaments-section">
    <div class="tournaments-header">
      <h2>Расписание турниров</h2>
      <button
        class="tournaments-desc-btn u-shimmering-gradient-hover"
        @click="toggleDescriptions"
      >
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
  .tournaments-desc-btn {
    width: 25%;
  }
}

@media (max-width: 737px) {
  .tournaments-header {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 0;
    }
  }
  .tournaments-desc-btn {
    width: 40%;
    font-size: 1.3rem;
  }
}

@media (max-width: 600px) {
  .tournaments-grid {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 456px) {
  .tournaments-desc-btn {
    width: 50%;
    font-size: 1.2rem;
  }
}
</style>
