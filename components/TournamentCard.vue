<script setup>
import specialTournamentBg from "@/assets/images/special-tournament.png";
const { loading, rawData: contacts } = useCityData("contacts");

const route = useRoute();

const { tournament, index, lastIndex } = defineProps({
  tournament: Object,
  index: Number,
  lastIndex: Number,
});

const sortedSchedules = computed(() =>
  tournament?.schedule
    ?.slice()
    .sort((a, b) => parseInt(a.startTime) - parseInt(b.startTime))
);
const tournDescStyled = computed(() =>
  sortedSchedules.value?.map((tourn) => {
    if (!tourn.description) return "";

    const lines = tourn.description.split(/\r?\n/);

    const filtered = lines.filter((line) => {
      const lower = line.toLowerCase();
      const days = [
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
        "воскресенье",
      ];
      const hasDay = days.some((day) => lower.includes(day));
      return !lower.includes("начало") && !hasDay;
    });

    return filtered.join("<br />");
  })
);
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
  <div class="tournament-card" v-if="index !== lastIndex">
    <div class="header">
      <p>{{ tournament?.date }}</p>
      <ClientOnly>
        <button
          v-if="index !== lastIndex"
          @click="openRegister"
          target="_blank"
          class="register-btn u-shimmering-gradient-hover"
          :disabled="tournament?.isDayoff"
        >
          Зарегистрироваться
        </button>
        <NuxtLink
          v-else-if="!tournament?.isDayoff"
          class="register-btn u-shimmering-gradient-hover"
          :to="`/${route.params.city}/stats`"
          target="_blank"
          >Лидерборд</NuxtLink
        >
      </ClientOnly>
    </div>
    <hr class="separator" />
    <div class="schedules">
      <div v-if="tournament?.isDayoff">
        <h4 class="dayoff">&mdash; Выходной &mdash;</h4>
      </div>
      <div
        class="schedules-row"
        v-for="(tour, index) in sortedSchedules"
        :key="index"
      >
        <div class="schedules-time">
          <div class="time-sub-row">
            <span class="reg-text">c</span>
            <span class="time-styled">{{ tour?.startTime }}</span>
          </div>
          <div class="time-sub-row">
            <span class="reg-text">до</span>
            <span class="reg-text">{{ tour?.endTime }}</span>
          </div>
        </div>
        <div class="schedules-name">
          <p class="name-heading">{{ tour?.name }}</p>
          <p class="name-rules" v-html="tournDescStyled[index]"></p>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="tournament-card"
    :style="
      index === lastIndex
        ? { backgroundImage: `url(${specialTournamentBg})` }
        : {}
    "
  >
    <div class="header">
      <p v-if="tournament?.isFinalPlaceholder">Финал</p>
      <p v-else>{{ tournament?.date }}</p>
      <button
        @click="openRegister"
        target="_blank"
        class="register-btn u-shimmering-gradient-hover"
      >
        <span v-if="tournament?.isFinalPlaceholder">
          Следите за новостями
        </span>
        <span v-else>Лидерборд</span>
      </button>
    </div>
    <hr class="separator" />
    <div class="schedules">
      <div v-if="tournament.isFinalPlaceholder">
        <h4 class="dayoff">Финалов в ближайшее время нет!</h4>
      </div>
      <div
        class="schedules-row"
        v-for="(tour, index) in sortedSchedules"
        :key="index"
      >
        <div class="schedules-time">
          <div class="time-sub-row">
            <span class="reg-text">c</span>
            <span class="time-styled">{{ tour?.startTime }}</span>
          </div>
          <div class="time-sub-row">
            <span class="reg-text">до</span>
            <span class="reg-text">{{ tour?.endTime }}</span>
          </div>
        </div>
        <div class="schedules-name">
          <p class="name-heading">{{ tour?.name }}</p>
          <p class="name-rules" v-html="tournDescStyled[index]"></p>
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
