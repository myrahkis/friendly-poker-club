<script setup>
import specialTournamentBg from "@/assets/images/special-tournament.png";

const { tournament, index, lastIndex } = defineProps({
  tournament: Object,
  index: Number,
  lastIndex: Number,
});

// console.log(tournament);
const { date, dayOfWeek, schedule } = tournament;
// console.log(schedule);
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
      <div class="schedules-row">
        <div class="schedules-time">
          <div class="time-sub-row">
            <span>c</span> <span class="time-styled">19:00</span>
          </div>
          <div class="time-sub-row">
            <span>до</span> <span>победителя</span>
          </div>
        </div>
        <div class="schedules-name">
          <p class="name-heading">{{ schedule[0] }}</p>
          <p class="name-rules">
            (турнир проводится по правилам UnlimitedTexas Hold'em)
          </p>
          <p class="name-desc">Основной турнир дня</p>
        </div>
      </div>
      <div class="schedules-row">
        <div class="schedules-time">
          <div class="time-sub-row">
            <span>c</span> <span class="time-styled">19:30</span>
          </div>
          <div class="time-sub-row">
            <span>до</span> <span>победителя</span>
          </div>
        </div>
        <div class="schedules-name">
          <p class="name-heading">{{ schedule[1] }}</p>
          <p class="name-rules">
            (турнир проводится по правилам Omaha hold 'em)
          </p>
          <p class="name-desc">
            Эксперементальный турнир дня, для тех, кому наскучил Холдем.
          </p>
        </div>
      </div>
      <div class="schedules-row">
        <div class="schedules-time">
          <div class="time-sub-row">
            <span>c</span> <span class="time-styled">14:00</span>
          </div>
          <div class="time-sub-row">
            <span>до</span> <span class="time-styled">02:00</span>
          </div>
        </div>
        <div class="schedules-name">
          <p class="name-heading">{{ schedule[2] }}</p>
          <p class="name-rules">(турнир проводится по правилам кеш игры)</p>
          <p class="name-desc">Для тех, кому хочется скоротать время.</p>
        </div>
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

  p {
    font-weight: 700;
  }
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
  gap: 3rem;
}
.schedules-time {
  display: flex;
  flex-direction: column;
  width: 29%;
  font-size: 1.2rem;
}
.time-sub-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.time-styled {
  font-size: 2.3rem;
  font-weight: 700;
}

.schedules-name {
  width: 60%;
}
.name-heading {
  font-size: 2rem;
  font-weight: 700;
}
.name-rules {
  font-size: 1rem;
}
.name-desc {
  font-size: 1rem;
  color: var(--light-gradient-color);
}

/* (480px–767px) */
@media (max-width: 1279px) {
  .tournament-card {
    padding: 3rem;
  }
}

/* (480px–767px) */
@media (max-width: 767px) {
  .time-styled {
    font-size: clamp(2rem, 2vw, 2.3rem);
  }
  .name-heading {
    font-size: clamp(1.8rem, 2vw, 2rem);
  }
}
</style>
