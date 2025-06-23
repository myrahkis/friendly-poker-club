<script setup>
import cityOptions from "/server/data/cityOptions.json";

const open = ref(false);
const selectedKey = ref("");
const selectedLabel = ref("");

const emit = defineEmits(["input"]);

const router = useRouter();
const route = useRoute();

const options = Object.entries(cityOptions).map(([value, label]) => ({
  value,
  label,
}));

function toggleOpen() {
  open.value = !open.value;
}

function onOptionClick(opt) {
  selectedKey.value = opt.value;
  selectedLabel.value = opt.label;
  open.value = false;
  emit("input", opt.value);

  router.push({
    path: route.path,
    query: { ...route.query, city: opt.value },
  });
}

async function getCoords() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation не поддерживается"));
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(pos.coords),
      (err) => reject(err),
      { enableHighAccuracy: true }
    );
  });
}

async function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Ошибка геокодирования");
  const data = await res.json();
  return (
    data.address.city ||
    data.address.town ||
    data.address.village ||
    data.address.county ||
    null
  );
}

async function detectCityName() {
  try {
    const { latitude, longitude } = await getCoords();
    return await reverseGeocode(latitude, longitude);
  } catch (e) {
    console.warn("detectCityName error:", e);
    return null;
  }
}

onMounted(async () => {
  // дефолтный город (перывй из json)
  if (options.length > 0) {
    onOptionClick(options[0]);
  } else {
    selectedLabel.value = "Нет городов";
    return;
  }

  // опредкление реального города
  const cityName = await detectCityName();
  if (!cityName) return;

  // совпадение, если отличается от текущего, то меняется
  const found = options.find(
    (opt) =>
      opt.value.toLowerCase() === cityName.toLowerCase() ||
      opt.label.toLowerCase() === cityName.toLowerCase()
  );
  if (found && found.value !== selectedKey.value) {
    onOptionClick(found);
  }
});
</script>

<template>
  <div class="city-selector" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="toggleOpen">
      {{ selectedLabel }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(opt, idx) in options"
        :key="idx"
        class="item"
        @click="onOptionClick(opt)"
      >
        {{ opt.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .city-selector {
  cursor: pointer;
  background-color: transparent;
  color: white;
  font-weight: 700;
  border: 0;
  padding: 0.8rem 1.5rem;
  padding-right: 3rem;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: right 15px top 1em, right 10px top 1em;
  background-size: 5px 5px, 5px 5px;
} */
.city-selector {
  position: relative;
  width: fit-content;
  /* text-align: left; */
  outline: none;
}

.city-selector .selected {
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 6px 6px 0px 0px;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 0.8rem 1.5rem;
  padding-right: 3.5rem;

  /* &:hover {
    background-color: var(--dark-bg-color);
  } */
}

.city-selector .selected.open {
  background-color: var(--dark-bg-color);
  border: 1px solid var(--light-gradient-color);
  border-radius: 1rem 1rem 0px 0px;
}

.city-selector .selected:after {
  position: absolute;
  content: "";
  top: 1em;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.city-selector .items {
  position: absolute;
  color: #fff;
  border-radius: 0px 0px 1rem 1rem;
  overflow: hidden;
  border-right: 1px solid var(--light-gradient-color);
  border-left: 1px solid var(--light-gradient-color);
  border-bottom: 1px solid var(--light-gradient-color);
  background-color: var(--dark-bg-color);
  left: 0;
  right: 0;
  z-index: 1;
  font-size: 1.5rem;
}

.city-selector .items div {
  cursor: pointer;
  color: #fff;
  /* padding-left: 1em; */
  padding: 1rem 1.5rem;
  user-select: none;
  transition: all 0.2s;
}

.city-selector .items div:hover {
  background-color: var(--light-gradient-color);
  color: black;
}
.selectHide {
  display: none;
}
</style>
