<script setup>
import cityOptions from "/server/data/cityOptions.json";

const open = ref(false);
const selectedKey = ref("");
const selectedLabel = ref("");
const isCityDetecting = ref(false);

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

  if (route.query.city === opt.value) {
    return;
  }

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
  isCityDetecting.value = true;
  try {
    const { latitude, longitude } = await getCoords();
    return await reverseGeocode(latitude, longitude);
  } catch (e) {
    console.warn("detectCityName error:", e);
    return null;
  } finally {
    isCityDetecting.value = false;
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
  // состояние permissions api
  let permState = "prompt";
  try {
    const perm = await navigator.permissions.query({ name: "geolocation" });
    permState = perm.state;
  } catch (e) {
    console.warn("Permissions API не поддерживается, будем запрашивать сразу");
  }

  if (permState === "denied") {
    return;
  }

  // согласие
  let coords = null;
  if (permState === "granted") {
    isCityDetecting.value = true;
    try {
      coords = await getCoords();
    } catch (e) {
      console.warn("Не удалось получить координаты:", e);
    } finally {
      isCityDetecting.value = false;
    }
  } else {
    // prompt
    try {
      coords = await getCoords();
    } catch (e) {
      console.warn("Пользователь отказал или ошибка геолокации:", e);
      return;
    }
  }

  if (!coords) return;

  isCityDetecting.value = true;
  let cityName = null;

  try {
    cityName = await detectCityName();
  } catch (e) {
    console.error("Ошибка при определении города:", e);
  } finally {
    isCityDetecting.value = false;
  }

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
      <div v-if="isCityDetecting">
        <span class="loader"></span>
      </div>
      <span v-else>
        {{ selectedLabel }}
      </span>
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
.city-selector {
  position: relative;
  width: fit-content;
  outline: none;
}

.city-selector .selected {
  position: relative;
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

.loader {
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 50%;
  left: 0;
  z-index: 1000;
  transform: translate(-50%, 0);
  border-radius: 50%;
  border: 0.5rem solid var(--dark-gradient-color);
  border-left-color: var(--light-gradient-color);
  animation: loader 3s infinite;
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 1800px) {
  .city-selector .selected {
    padding: 1rem 2rem;
    padding-right: 4rem;
    font-size: clamp(1.8rem, 2vw + 0.3rem, 2rem);
  }
  .city-selector .items {
    font-size: clamp(1.8rem, 2vw + 0.3rem, 2rem);
  }
  .city-selector .items div {
    padding: 1rem 2rem;
  }
}
@media (min-width: 3000px) {
  .city-selector .selected {
    padding: 1.5rem 2rem;
    padding-right: 6rem;
    font-size: clamp(1.8rem, 2vw + 0.3rem, 2.8rem);
  }
  .city-selector .selected:after {
    border: 0.8rem solid transparent;
    border-color: #fff transparent transparent transparent;
  }
  .city-selector .items {
    font-size: clamp(1.8rem, 2vw + 0.3rem, 2.8rem);
  }
  .city-selector .items div {
    padding: 1rem 2rem;
  }
}
</style>
