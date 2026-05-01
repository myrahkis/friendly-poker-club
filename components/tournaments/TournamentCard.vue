<script setup>
import specialTournamentBg from "@/assets/images/special-tournament.png";
import { computed, nextTick, ref } from "vue";
import TournamentCardPopup from "./TournamentCardPopup.vue";

const { rawData: contacts } = useCityData("contacts");

const props = defineProps({
  tournament: Object,
  index: Number,
  lastIndex: Number,
});

const rowRefs = ref({});

const activeKey = ref("");
const activeData = ref(null);
const activePosition = ref(null);

const panelGap = 16;
const panelMaxWidth = 360;
const panelMinWidth = 240;

const isFinal = computed(() => props.index === props.lastIndex);

const sortedSchedules = computed(() => {
  return (props.tournament?.schedule ?? [])
    .slice()
    .sort((a, b) => Number(a.startTime) - Number(b.startTime));
});

const formatText = (html, max = 100) => {
  if (!html) return "";

  const text = html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .trim();

  return text.length > max ? text.slice(0, max) + "..." : text;
};

const formatDescription = (desc) => {
  if (!desc) return null;

  const days = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];

  return (
    desc
      .split(/\r?\n/)
      .filter((line) => {
        const l = line.toLowerCase();
        return !l.includes("начало") && !days.some((d) => l.includes(d));
      })
      .join("<br />") || null
  );
};

const setRowRef = (key, el) => {
  if (el) rowRefs.value[key] = el;
  else delete rowRefs.value[key];
};

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const getPanelPlacement = (rect) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const leftSpace = rect.left;
  const rightSpace = vw - rect.right;

  const side = rightSpace >= leftSpace ? "right" : "left";
  const available = (side === "right" ? rightSpace : leftSpace) - panelGap;

  const width = clamp(available, panelMinWidth, panelMaxWidth);

  const scrollX = window.scrollX || 0;
  const scrollY = window.scrollY || 0;

  if (vw <= 600) {
    return {
      side: "bottom",
      top: rect.bottom + scrollY + panelGap,
      left: null,
      width: null,
    };
  }

  let left =
    side === "right"
      ? rect.right + scrollX + panelGap
      : rect.left + scrollX - width - panelGap;

  const top = rect.top + scrollY;

  return {
    side,
    width,
    top: clamp(top, scrollY + panelGap, scrollY + vh - 80),
    left: clamp(left, scrollX + panelGap, scrollX + vw - width - panelGap),
  };
};

const closePopup = () => {
  activeKey.value = "";
  activeData.value = null;
  activePosition.value = null;
};

const openPopup = async (key, tour) => {
  if (activeKey.value === key) {
    closePopup();
    return;
  }

  await nextTick();

  const el = rowRefs.value[key];
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const pos = getPanelPlacement(rect);

  activeKey.value = key;
  activePosition.value = pos;
  activeData.value = {
    tour,
    tournament: props.tournament,
  };
};

const registerLink = computed(() => contacts.value?.socials?.tg);

const openRegister = () => {
  if (!registerLink.value) return;
  window.open(registerLink.value, "_blank");
};

const cardTitle = computed(() => {
  if (isFinal.value) {
    return props.tournament?.isFinalPlaceholder
      ? "Финал"
      : props.tournament?.date;
  }
  return props.tournament?.date;
});

const buttonText = computed(() => {
  if (isFinal.value) {
    return props.tournament?.isFinalPlaceholder
      ? "Следите за новостями"
      : "Лидерборд";
  }
  return "Зарегистрироваться";
});

const emptyText = computed(() => {
  if (!isFinal.value) return null;

  return props.tournament?.isFinalPlaceholder
    ? "Финалов в ближайшее время нет!"
    : null;
});

const bgStyle = computed(() => {
  return isFinal.value
    ? { backgroundImage: `url(${specialTournamentBg})` }
    : {};
});

const nameClass = computed(() =>
  isFinal.value ? "name-heading-final" : "name-heading",
);
</script>

<template>
  <div class="tournament-card" v-if="tournament" :style="bgStyle">
    <div class="header">
      <p>{{ cardTitle }}</p>
      <button
        class="register-btn u-shimmering-gradient-hover"
        @click="openRegister"
      >
        {{ buttonText }}
      </button>
    </div>
    <hr class="separator" />
    <div v-if="emptyText" class="schedules">
      <h4 class="dayoff">{{ emptyText }}</h4>
    </div>
    <div v-else class="schedules">
      <div
        v-for="(tour, tourIndex) in sortedSchedules"
        :key="tourIndex"
        class="schedule-row-shell"
        :ref="(el) => setRowRef(`row-${index}-${tourIndex}`, el)"
      >
        <div class="schedules-row">
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
            <p :class="nameClass">{{ tour?.name }}</p>
            <template v-if="formatDescription(tour?.description)">
              <p class="name-rules">
                {{ formatText(formatDescription(tour.description)) }}
              </p>
              <button
                class="description-toggle"
                @click.stop="
                  openPopup(`row-${index}-${tourIndex}`, {
                    ...tour,
                    description: formatDescription(tour.description),
                  })
                "
              >
                {{
                  activeKey === `row-${index}-${tourIndex}`
                    ? "Скрыть"
                    : "Показать полностью"
                }}
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TournamentCardPopup
    :visible="!!activeKey"
    :panel="activePosition"
    :tournament="activeData?.tournament"
    :tour="activeData?.tour"
    :content="activeData?.tour?.description"
    @close="closePopup"
  />
</template>

<style scoped>
.description-toggle {
  margin-top: 6px;
  border: none;
  background: transparent;
  padding: 0;
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
  transition: 0.2s ease;
}
.description-toggle:hover {
  color: var(--light-gradient-color);
}

.schedule-row-shell {
  position: relative;
  overflow: visible;
}

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
  background:
    linear-gradient(#063293, #063293) padding-box,
    linear-gradient(to right, white, white) border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header p {
  font-size: 1.5rem;
  font-weight: 700;
}

.register-btn {
  cursor: pointer;
  padding: 1rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 2rem;

  background:
    linear-gradient(#011331, #011331) padding-box,
    linear-gradient(
        to right,
        var(--dark-gradient-color),
        var(--light-gradient-color)
      )
      border-box;

  font-size: 1.2rem;
  transition: 0.2s ease;
}
.register-btn:hover {
  transform: translateY(-2px);
}
.register-btn:disabled {
  cursor: not-allowed;
  background:
    linear-gradient(#162443, #162443) padding-box,
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
.name-heading-final {
  font-size: 1.7rem;
  font-weight: 700;
}
.name-rules {
  font-size: 1rem;
  margin-top: 0;
}
.name-desc {
  font-size: 1rem;
  color: var(--light-gradient-color);
}

@keyframes popupFade {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (min-width: 1800px) {
  .schedules-row {
    grid-template-columns: 8rem auto;
  }
  .schedules-time,
  .name-rules,
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
  .name-heading-final {
    font-size: clamp(1.4rem, 2vw, 1.5rem);
  }
  .name-rules,
  .name-desc {
    font-size: 1rem;
  }
}

@media (max-width: 1279px) {
  .tournament-card {
    padding: 3rem;
  }
}

@media (max-width: 767px) {
  .tournament-card {
    padding: 1.5rem;
  }
  .schedules-row {
    gap: 1.5rem;
  }
  .header p {
    font-size: clamp(1.3rem, 2vw, 1.5rem);
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
  .name-heading-final {
    font-size: clamp(1.4rem, 2vw, 1.5rem);
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
  .description-popup {
    padding: 1rem;
    border-radius: 1.2rem;
  }
  .description-popup__name {
    font-size: 1.2rem;
  }
  .description-popup__content {
    font-size: 0.95rem;
    line-height: 1.55;
  }
}

@media (max-width: 500px) {
  .schedules-row {
    grid-template-columns: 6rem auto;
  }
}
</style>
