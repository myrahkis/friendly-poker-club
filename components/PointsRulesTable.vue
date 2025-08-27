<script setup>
const points = [
  [100, 120, 140, 170, 200, 240, 290, 350, 420, 500],
  [80, 100, 120, 150, 180, 220, 270, 330, 400, 480],
  [60, 90, 110, 140, 170, 210, 260, 320, 380, 460],
  [40, 80, 100, 130, 160, 200, 250, 300, 370, 440],
  [30, 70, 90, 120, 150, 190, 230, 290, 350, 420],
  [20, 60, 80, 110, 140, 180, 220, 270, 340, 410],
  [20, 50, 80, 110, 130, 170, 210, 260, 320, 390],
  [10, 40, 70, 100, 130, 160, 200, 250, 310, 370],
  [10, 40, 60, 90, 120, 150, 190, 240, 300, 360],
  [10, 30, 60, 80, 110, 140, 180, 230, 280, 350],
  [null, 30, 50, 80, 100, 140, 170, 220, 270, 330],
  [null, 20, 50, 70, 100, 130, 170, 210, 260, 320],
  [null, 20, 40, 70, 90, 120, 160, 200, 250, 310],
  [null, 20, 40, 60, 80, 110, 150, 190, 240, 290],
  [null, 10, 30, 60, 80, 110, 140, 180, 230, 280],
  [null, 10, 30, 50, 80, 100, 130, 170, 220, 270],
  [null, 10, 30, 50, 70, 100, 130, 170, 210, 260],
  [null, 10, 30, 40, 70, 90, 120, 160, 200, 250],
  [null, 10, 20, 40, 60, 90, 120, 150, 190, 240],
  [null, 10, 20, 40, 60, 80, 110, 140, 180, 230],
  [null, null, 20, 40, 50, 80, 100, 140, 180, 220],
  [null, null, 20, 30, 50, 70, 100, 130, 170, 210],
  [null, null, 10, 30, 50, 70, 90, 130, 160, 210],
  [null, null, 10, 30, 40, 70, 90, 120, 160, 200],
  [null, null, 10, 30, 40, 60, 90, 110, 150, 190],
  [null, null, 10, 20, 40, 60, 80, 110, 140, 180],
  [null, null, 10, 20, 40, 50, 80, 100, 140, 170],
  [null, null, 10, 20, 30, 50, 70, 100, 130, 170],
  [null, null, 10, 20, 30, 50, 70, 90, 130, 160],
  [null, null, 10, 20, 30, 50, 70, 90, 120, 150],
  [null, null, null, 10, 30, 40, 60, 90, 110, 150],
  [null, null, null, 10, 30, 40, 60, 80, 100, 140],
  [null, null, null, 10, 20, 40, 60, 80, 110, 140],
  [null, null, null, 10, 20, 40, 50, 70, 100, 130],
  [null, null, null, 10, 20, 30, 50, 70, 100, 130],
  [null, null, null, 10, 20, 30, 50, 70, 90, 120],
  [null, null, null, 10, 20, 30, 50, 60, 90, 120],
  [null, null, null, 10, 20, 30, 40, 60, 80, 110],
  [null, null, null, 10, 20, 30, 40, 60, 80, 110],
  [null, null, null, 10, 10, 20, 40, 60, 80, 100],
  [null, null, null, null, 10, 20, 40, 50, 70, 100],
  [null, null, null, null, 10, 20, 30, 50, 70, 90],
  [null, null, null, null, 10, 20, 30, 50, 70, 90],
  [null, null, null, null, 10, 20, 30, 50, 60, 90],
  [null, null, null, null, 10, 20, 30, 40, 80, 80],
  [null, null, null, null, 10, 20, 30, 40, 60, 80],
  [null, null, null, null, 10, 20, 30, 40, 60, 80],
  [null, null, null, null, 10, 10, 20, 40, 50, 70],
  [null, null, null, null, 10, 10, 20, 40, 50, 70],
  [null, null, null, null, 10, 10, 20, 30, 50, 70],
  [null, null, null, null, null, 10, 20, 30, 50, 60],
  [null, null, null, null, null, 10, 20, 30, 40, 60],
  [null, null, null, null, null, 10, 20, 30, 40, 60],
  [null, null, null, null, null, 10, 20, 30, 40, 60],
  [null, null, null, null, null, 10, 20, 30, 40, 50],
  [null, null, null, null, null, 10, 20, 20, 40, 50],
  [null, null, null, null, null, 10, 10, 20, 40, 50],
  [null, null, null, null, null, 10, 10, 20, 30, 50],
  [null, null, null, null, null, 10, 10, 20, 30, 50],
  [null, null, null, null, null, 10, 10, 20, 30, 40],
  [null, null, null, null, null, null, 10, 20, 30, 40],
  [null, null, null, null, null, null, 10, 20, 30, 40],
  [null, null, null, null, null, null, 10, 20, 30, 40],
  [null, null, null, null, null, null, 10, 20, 30, 40],
  [null, null, null, null, null, null, 10, 20, 20, 40],
  [null, null, null, null, null, null, 10, 10, 20, 30],
  [null, null, null, null, null, null, 10, 10, 20, 30],
  [null, null, null, null, null, null, 10, 10, 20, 30],
  [null, null, null, null, null, null, 10, 10, 20, 30],
  [null, null, null, null, null, null, 10, 10, 20, 30],
  [null, null, null, null, null, null, 10, 10, 20, 30],
  [null, null, null, null, null, null, null, 10, 20, 30],
  [null, null, null, null, null, null, null, 10, 20, 20],
  [null, null, null, null, null, null, null, 10, 20, 20],
  [null, null, null, null, null, null, null, 10, 10, 20],
  [null, null, null, null, null, null, null, 10, 10, 20],
  [null, null, null, null, null, null, null, 10, 10, 20],
  [null, null, null, null, null, null, null, 10, 10, 20],
  [null, null, null, null, null, null, null, 10, 10, 20],
  [null, null, null, null, null, null, null, 10, 10, 20],
  [null, null, null, null, null, null, null, 10, 10, 20],
  [null, null, null, null, null, null, null, null, 10, 20],
  [null, null, null, null, null, null, null, null, 10, 20],
  [null, null, null, null, null, null, null, null, 10, 10],
  [null, null, null, null, null, null, null, null, 10, 10],
  [null, null, null, null, null, null, null, null, 10, 10],
  [null, null, null, null, null, null, null, null, 10, 10],
  [null, null, null, null, null, null, null, null, 10, 10],
  [null, null, null, null, null, null, null, null, 10, 10],
  [null, null, null, null, null, null, null, null, 10, 10],
  [null, null, null, null, null, null, null, null, 10, 10],
  [null, null, null, null, null, null, null, null, null, 10],
  [null, null, null, null, null, null, null, null, null, 10],
  [null, null, null, null, null, null, null, null, null, 10],
  [null, null, null, null, null, null, null, null, null, 10],
  [null, null, null, null, null, null, null, null, null, 10],
  [null, null, null, null, null, null, null, null, null, 10],
  [null, null, null, null, null, null, null, null, null, 10],
  [null, null, null, null, null, null, null, null, null, 10],
  [null, null, null, null, null, null, null, null, null, 10],
];

const MOBILE_BREAK = 450;
const DESKTOP_COLS = 100;
const MOBILE_COLS = 10;
const isMobile = ref(
  typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAK : false
);

function getCellStyle(value) {
  if (value === null) return { background: "#022563", color: "#fff" };
  if (value < 100) return { background: "#1e3f8a", color: "#fff" };
  if (value < 300) return { background: "#3575c2", color: "#fff" };
  return { background: "#76d6ff", color: "#022563" };
}

// горизонтальная таблица
const transposedPoints = computed(() => {
  const maxCols = Math.max(...points.map((r) => r.length));
  return Array.from({ length: maxCols }, (_, colIndex) =>
    points.map((row) => row[colIndex] ?? null)
  );
});
// гориз для пк или вертикальная для мобилок
const displayedPoints = computed(() =>
  isMobile.value ? points : transposedPoints.value
);

const colsCount = computed(() => (isMobile.value ? MOBILE_COLS : DESKTOP_COLS));

// резайз
onMounted(() => {
  if (typeof window === "undefined") return;

  isMobile.value = window.innerWidth < MOBILE_BREAK;

  let timeout = null;
  const handler = () => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(() => {
      isMobile.value = window.innerWidth < MOBILE_BREAK;
      timeout = null;
    }, 100);
  };

  window.addEventListener("resize", handler);

  onUnmounted(() => {
    window.removeEventListener("resize", handler);
    if (timeout !== null) clearTimeout(timeout);
  });
});
</script>

<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <td class="diagonal">
            <span v-if="!isMobile" class="lb">Cтолы</span>
            <span v-if="!isMobile" class="rt">Место</span>
            <span v-if="isMobile" class="lb">Место</span>
            <span v-if="isMobile" class="rt">Cтолы</span>
            <div class="line"></div>
          </td>
          <th v-for="table in colsCount" :key="table">{{ table }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, placeIndex) in displayedPoints" :key="placeIndex">
          <th>{{ placeIndex + 1 }}</th>
          <td
            v-for="(value, tableIndex) in row"
            :key="tableIndex"
            :style="getCellStyle(value)"
          >
            {{ value || "" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  overflow-x: auto;
  width: 100%;
  scrollbar-width: thin;
}

table {
  table-layout: fixed;
  overflow: hidden;
  border-collapse: separate;
  border-spacing: 0;
  border: solid var(--light-gradient-color) 1px;
  border-bottom: none;
  border-radius: 2rem;
  /* background-color: #f7f9ff; */
  width: 100%;
  /* padding: 2rem; */
}

td,
th {
  text-align: center;
  vertical-align: middle;
  font-size: clamp(0.8rem, 1.5vw, 1.3rem);
  font-weight: 600;
  width: clamp(2rem, 4.5vw, 4rem);
  height: 1.5rem;
}
td {
  border-left: solid var(--light-gradient-color) 1px;
  border-bottom: solid var(--light-gradient-color) 1px;
  padding: clamp(0.3rem, 0.8vw, 0.8rem);
}
th {
  border-top: none;
  border-bottom: solid var(--light-gradient-color) 1px;
  border-left: solid var(--light-gradient-color) 1px;
}
td {
  position: relative;
}
td:first-child,
th:first-child {
  border-left: none;
}

.tables-quant {
  border-right: solid var(--light-gradient-color) 1px;
}
.score {
  border-left: none;
  text-align: left;
  padding-left: 1rem;
}

.diagonal {
  width: clamp(4rem, 10vw, 9rem);
  height: clamp(4rem, 8vw, 6rem);
  border-bottom: 1px solid var(--light-gradient-color);
  border-top: none;
}
.line {
  position: absolute;
  top: -0.5rem;
  left: 0;
  width: calc(1.4 * clamp(4.5rem, 10vw, 9rem));
  transform-origin: left center;
  transform: rotate(35deg);
  border-top: 1px solid var(--light-gradient-color);
  pointer-events: none;
}
.diagonal span.lb {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  text-wrap-style: pretty;
  text-align: left;
  font-size: clamp(0.7rem, 1.5vw, 1.3rem);
}
.diagonal span.rt {
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: clamp(0.7rem, 1.5vw, 1.3rem);
}

@media (max-width: 920px) {
  .line {
    transform: rotate(36deg);
  }
}
@media (max-width: 840px) {
  .line {
    transform: rotate(38deg);
  }
}
@media (max-width: 800px) {
  .line {
    transform: rotate(40deg);
  }
}
@media (max-width: 480px) {
  .line {
    transform: rotate(42deg);
  }
}
@media (max-width: 449px) {
  .diagonal {
    width: clamp(3rem, 8vw, 5rem);
    height: clamp(3.5rem, 8vw, 6rem);
  }
  .line {
    width: calc(1.5 * clamp(4rem, 10vw, 9rem));
    transform: rotate(35deg);
  }
}
@media (max-width: 405px) {
  .line {
    width: calc(1.45 * clamp(4rem, 10vw, 9rem));
    transform: rotate(40deg);
  }
}
@media (max-width: 376px) {
  .diagonal {
    width: clamp(3.5rem, 8vw, 5rem);
    height: clamp(3.5rem, 8vw, 6rem);
  }
  .line {
    width: calc(1.45 * clamp(4rem, 10vw, 9rem));
    transform: rotate(40deg);
  }
}
@media (max-width: 341px) {
  .diagonal {
    width: clamp(3.5rem, 8vw, 5rem);
    height: clamp(3.5rem, 8vw, 6rem);
  }
  .line {
    width: calc(1.35 * clamp(4rem, 10vw, 9rem));
    transform: rotate(45deg);
  }
}
</style>
