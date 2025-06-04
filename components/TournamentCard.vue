<script setup>
import specialTournamentBg from "@/assets/images/special-tournament.png";

const { tournament, index, lastIndex } = defineProps({
  tournament: Object,
  index: Number,
  lastIndex: Number,
});

// console.log(tournament);
const { date, dayOfWeek, schedule } = tournament;
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
      <p>{{ date }} - {{ dayOfWeek }}</p>
      <a class="register-btn u-shimmering-gradient-hover">Зарегистрироваться</a>
    </div>
    <!-- <h4>
      {{ heading }}
    </h4> -->
    <hr class="separator" />
    <div class="schedules">
      <div
        class="schedules-row"
        v-for="({ time, name }, index) in schedule"
        :key="index"
      >
        <p>{{ time }}</p>
        <p>{{ name }}</p>
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
  border: none;
  background-size: 105%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.tournament-card:last-of-type .register-btn {
  background: linear-gradient(#063293, #063293) padding-box,
    linear-gradient(to right, white, white) border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
}
.register-btn {
  cursor: pointer;
  padding: 1rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 2rem;
  background: linear-gradient(#011331, #011331) padding-box,
    linear-gradient(
        to right,
        var(--dark-gradient-color),
        var(--light-gradient-color)
      )
      border-box;
  font-size: 1.2rem;
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

/* (480px–767px) */
@media (max-width: 1279px) {
  .tournament-card {
    padding: 3rem;
  }
}
</style>
