<script setup>
import specialTournamentBg from "@/assets/images/special-tournament.png";
const { loading, rawData: contacts } = useCityData("contacts");

const route = useRoute();

const { tournament, index, lastIndex } = defineProps({
  tournament: Object,
  index: Number,
  lastIndex: Number,
});

const { date, dayOfWeek, dayoff } = tournament;

function registerLink() {
  return contacts.value.socials ? contacts.value.socials.tg : "";
}

const openRegister = () => {
  const url = registerLink();
  if (!url) return;
  window.open(url, "_blank");
};
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
      <button
        v-if="index !== lastIndex"
        @click="openRegister"
        target="_blank"
        class="register-btn u-shimmering-gradient-hover"
        :disabled="tournament?.dayoff"
      >
        Зарегистрироваться
      </button>
      <NuxtLink
        v-else-if="!tournament?.dayoff"
        class="register-btn u-shimmering-gradient-hover"
        :to="`/${route.params.city}/stats`"
        target="_blank"
        >Лидерборд</NuxtLink
      >
    </div>
    <hr class="separator" />
    <div class="schedules">
      <div v-if="tournament?.dayoff">
        <h4 class="dayoff">&mdash; Выходной &mdash;</h4>
      </div>
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
          <p class="name-rules" v-if="tournament?.heading !== 'monthly'">
            (турнир проводится по правилам UnlimitedTexas Hold'em)
          </p>
          <p v-else class="name-rules">
            (турнир проводится среди топ-27 игроков лидерборда)
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
          <p class="name-rules" v-if="tournament?.heading !== 'monthly'">
            (турнир проводится по правилам кеш игры)
          </p>
          <p v-else class="name-rules">
            (турнир проводится по правилам кеш-игры среди игроков не вошедших в
            топ-27 или вылетевших из турнира месяца)
          </p>
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
.register-btn:disabled {
  cursor: not-allowed;
  background: linear-gradient(#162443, #162443) padding-box,
    linear-gradient(
        to right,
        var(--dark-gradient-color-disabled),
        var(--light-gradient-color-disabled)
      )
      border-box;
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
  font-size: 1rem;
}
.time-sub-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}

.time-styled,
.dayoff {
  font-size: 2rem;
  font-weight: 700;
}

.schedules-name {
  grid-column: 2 / -1;
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

@media (max-width: 1400px) {
  .schedules-time {
    font-size: clamp(0.9rem, 1vw, 1.05rem);
  }
  .time-styled,
  .dayoff {
    font-size: clamp(1.5rem, 1.3vw, 2.3rem);
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
  .header {
    p {
      font-size: clamp(1.3rem, 2vw, 1.5rem);
    }
  }
  .reg-text {
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
  .time-styled,
  .dayoff {
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
  .header {
    p {
      font-size: clamp(1.3rem, 2vw, 1.5rem);
    }
  }
  .reg-text {
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
  .time-styled,
  .dayoff {
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
@media (max-width: 500px) {
  .schedules-row {
    grid-template-columns: 6rem auto;
  }
}
</style>
