<script setup>
import specialTournamentBg from "@/assets/images/special-tournament.png";
const { rawData: contacts } = useCityData("contacts");

const { tournament, index, lastIndex } = defineProps({
  tournament: Object,
  index: Number,
  lastIndex: Number,
});

// console.log(tournament);
const { date, dayOfWeek } = tournament;
// console.log(tournament);

function registerLink() {
  return contacts.value.socials ? contacts.value.socials.tg : "";
}
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
      <a
        v-if="index !== lastIndex"
        :href="registerLink()"
        target="_blank"
        class="register-btn u-shimmering-gradient-hover"
        >Зарегистрироваться</a
      >
      <a v-else class="register-btn u-shimmering-gradient-hover">Лидерборд</a>
    </div>
    <!-- <h4>
      {{ heading }}
    </h4> -->
    <hr class="separator" />
    <div class="schedules">
      <div class="schedules-row" v-if="tournament.schedule.holdem">
        <div class="schedules-time">
          <div class="time-sub-row">
            <span class="reg-text">c</span>
            <span class="time-styled">{{
              tournament.schedule.holdem.time
            }}</span>
          </div>
          <div class="time-sub-row">
            <span class="reg-text">до</span>
            <span class="reg-text">победителя</span>
          </div>
        </div>
        <div class="schedules-name">
          <p class="name-heading">{{ tournament.schedule.holdem.name }}</p>
          <p class="name-rules">
            (турнир проводится по правилам UnlimitedTexas Hold'em)
          </p>
          <p class="name-desc">Основной турнир дня</p>
        </div>
      </div>
      <div class="schedules-row" v-if="tournament.schedule.experimental">
        <div class="schedules-time">
          <div class="time-sub-row">
            <span class="reg-text">c</span>
            <span class="time-styled">{{
              tournament.schedule.experimental.time
            }}</span>
          </div>
          <div class="time-sub-row">
            <span class="reg-text">до</span>
            <span class="reg-text">победителя</span>
          </div>
        </div>
        <div class="schedules-name">
          <p class="name-heading">
            {{ tournament.schedule.experimental.name }}
          </p>
          <p class="name-rules">
            (турнир проводится по правилам Omaha hold 'em)
          </p>
          <p class="name-desc">
            Эксперементальный турнир дня, для тех, кому наскучил Холдем.
          </p>
        </div>
      </div>
      <div class="schedules-row" v-if="tournament.schedule.cache">
        <div class="schedules-time">
          <div class="time-sub-row">
            <span class="reg-text">c</span>
            <span class="time-styled">{{
              tournament.schedule.cache.time
            }}</span>
          </div>
          <div class="time-sub-row">
            <span class="reg-text">до</span>
            <span class="time-styled">02:00</span>
          </div>
        </div>
        <div class="schedules-name">
          <p class="name-heading">{{ tournament.schedule.cache.name }}</p>
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

  p {
    font-size: 1.5rem;
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
  display: grid;
  grid-template-columns: 7rem auto;
  gap: 2rem;
}
.schedules-time {
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  /* width: 29%; */
  font-size: 1rem;
}
.time-sub-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}
/* .reg-text {
  font-size: 1.5rem; */

.time-styled {
  font-size: 2rem;
  font-weight: 700;
}

.schedules-name {
  grid-column: 2 / -1;
  /* width: 60%; */
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

@media (min-width: 1800px) {
  .schedules-row {
    grid-template-columns: 8rem auto;
  }
  .schedules-time {
    font-size: clamp(1.1rem, 2vw + 0.3rem, 1.2rem);
  }
  .name-rules {
    font-size: clamp(1.1rem, 2vw + 0.3rem, 1.2rem);
  }
  .name-desc {
    font-size: clamp(1.1rem, 2vw + 0.3rem, 1.2rem);
  }
}
@media (min-width: 2200px) {
  /* .schedules-row {
    grid-template-columns: 9rem auto;
  }
  .time-styled,
  .name-heading {
    font-size: clamp(1.2rem, 2vw + 0.3rem, 2.2rem);
  }
  .schedules-time,
  .name-rules,
  .name-desc {
    font-size: clamp(1.2rem, 2vw + 0.3rem, 1.3rem);
  } */
}
@media (min-width: 3000px) {
}

@media (max-width: 1400px) {
  .schedules-time {
    /* width: 30%; */
    font-size: clamp(0.9rem, 1vw, 1.05rem);
  }
  .schedules-row {
    /* gap: 2rem; */
  }
  .time-styled {
    font-size: clamp(1.5rem, 1.3vw, 2.3rem);
  }
  .schedules-name {
    /* width: 70%; */
  }
  .name-heading {
    font-size: clamp(1.6rem, 2vw, 1.8rem);
  }
  .name-rules {
    font-size: 1rem;
  }
  .name-desc {
    font-size: 1rem;
    color: var(--light-gradient-color);
  }
}

/* (480px–767px) */
@media (max-width: 1279px) {
  /* .schedules-time {
    width: 15%;
  }
  .schedules-name {
    width: 80%;
  } */
  .tournament-card {
    padding: 3rem;
  }
}

/* (480px–767px) */
@media (max-width: 767px) {
  .tournament-card {
    padding: 1.5rem;
  }
  .schedules-row {
    gap: 1.5rem;
  }
  .schedules-name {
    /* width: 65%; */
  }
  .schedules-time {
    /* width: 30%; */
  }
  .header {
    p {
      font-size: clamp(1.3rem, 2vw, 1.5rem);
    }
  }
  .reg-text {
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
  .time-styled {
    font-size: clamp(1.6rem, 2vw, 1.9rem);
  }
  .name-heading {
    font-size: clamp(1.6rem, 2vw, 1.7rem);
  }
  .name-rules,
  .name-desc {
    font-size: 0.9rem;
  }
  .register-btn {
    padding: 1rem 1.5rem;
    border: 1px solid transparent;
    font-size: 1rem;
  }
}
/* (480px–767px) */
@media (max-width: 767px) {
  .tournament-card {
    padding: 1.5rem;
  }
  .schedules-row {
    gap: 1.5rem;
  }
  .schedules-name {
    /* width: 65%; */
  }
  .schedules-time {
    /* width: 30%; */
  }
  .header {
    p {
      font-size: clamp(1.3rem, 2vw, 1.5rem);
    }
  }
  .reg-text {
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
  .time-styled {
    font-size: clamp(1.6rem, 2vw, 1.9rem);
  }
  .name-heading {
    font-size: clamp(1.6rem, 2vw, 1.7rem);
  }
  .name-rules,
  .name-desc {
    font-size: 0.9rem;
  }
  .register-btn {
    padding: 1rem 1.5rem;
    border: 1px solid transparent;
    font-size: 1rem;
  }
}

/* (480px–767px) */
@media (max-width: 600px) {
  .schedules-name {
    /* width: 80%; */
  }
  .schedules-time {
    /* width: 15%; */
  }
}
/* (480px–767px) */
@media (max-width: 500px) {
  .schedules-row {
    grid-template-columns: 6rem auto;
  }
}
</style>
