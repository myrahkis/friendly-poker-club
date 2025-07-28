const selectedKey = ref("");
const selectedLabel = ref("");
const isCityDetecting = ref(false);

const options = ref([]);

export function useCitySelector(emit) {
  const config = useRuntimeConfig();
  const open = ref(false);
  const router = useRouter();
  const route = useRoute();

  async function loadCities() {
    try {
      const res = await fetch(`${config.public.apiBase}/data/cityOptions.json`);

      if (!res.ok) throw new Error("Не удалось загрузить список городов");

      const cityOptions = await res.json();
      options.value = Object.entries(cityOptions).map(([value, label]) => ({
        value,
        label,
      }));
    } catch (e) {
      console.error(e);
      options.value = [];
    }
  }

  function toggleOpen() {
    open.value = !open.value;
  }

  async function onOptionClick(opt) {
    if (route.params.city === opt.value) {
      selectedKey.value = opt.value;
      selectedLabel.value = opt.label;
      open.value = false;
      emit("input", opt.value);
      return;
    }

    selectedKey.value = opt.value;
    selectedLabel.value = opt.label;
    open.value = false;
    emit("input", opt.value);

    await nextTick();

    await navigateTo(`/${opt.value}`, { replace: true });
  }

  async function getCoords() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation не поддерживается"));
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve(pos.coords),
        (err) => reject(err),
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 5000,
        }
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

  let initialized = false;

  onMounted(async () => {
    if (initialized) return;
    initialized = true;

    await loadCities();

    const slugFromUrl = route.params.city;
    let initialOption = options.value.find((o) => o.value === slugFromUrl);

    // дефолтный город (перывй из json)
    if (!initialOption && options.value.length > 0) {
      initialOption = options.value[0];
    }

    if (initialOption) {
      await onOptionClick(initialOption);
    } else {
      selectedLabel.value = "Город не найден";
    }

    // опредкление реального города
    // состояние permissions api
    let permState = "prompt";
    try {
      const perm = await navigator.permissions.query({ name: "geolocation" });
      permState = perm.state;
    } catch (e) {
      console.warn(
        "Permissions API не поддерживается, будем запрашивать сразу"
      );
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
    const found = options.value.find(
      (opt) =>
        opt.value.toLowerCase() === cityName.toLowerCase() ||
        opt.label[0].toLowerCase() === cityName.toLowerCase()
    );
    if (found && found.value !== selectedKey.value) {
      await onOptionClick(found);
    }
  });

  return {
    open,
    selectedLabel,
    isCityDetecting,
    options,
    onOptionClick,
    toggleOpen,
  };
}
