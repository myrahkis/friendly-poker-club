<script setup>
import specialTournamentBg from "@/assets/images/special-tournament.png";

const { tournament, index, lastIndex } = defineProps({
  tournament: Object,
  index: Number,
  lastIndex: Number,
});

const { date, dayOfWeek, heading, schedule } = tournament;
</script>

<template>
  <div
    class="tournament-card"
    :style="
      index === lastIndex
        ? { backgroundImage: `url(${specialTournamentBg})` }
        : {}
    "
  >
    <div class="header">
      <p>{{ date }}</p>
      <div class="day-of-week">{{ dayOfWeek }}</div>
    </div>
    <h4>
      {{ heading }}
    </h4>
    <hr class="separator" />
    <div class="schedules">
      <div
        class="schedules-row"
        v-for="({ time, text }, index) in schedule"
        :key="index"
      >
        <p>{{ time }}</p>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tournament-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--dark-bg-color);
  border: 1px solid var(--light-gradient-color);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(3px);

  font-size: 1.5rem;
}
.tournament-card:last-of-type {
  /* background-color: #063293; */
  background-size: 105%;
  background-repeat: no-repeat;
  background-position: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
}
.day-of-week {
  padding: 0.8rem;
  border: 2px solid transparent;
  border-radius: 50%;
  background: linear-gradient(#011331, #011331) padding-box,
    linear-gradient(
        to right,
        var(--dark-gradient-color),
        var(--light-gradient-color)
      )
      border-box;
}

.schedules {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.schedules-row {
  display: flex;
  justify-content: space-between;
  gap: 5rem;
}
</style>
