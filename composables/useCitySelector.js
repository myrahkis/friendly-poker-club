import cityOptions from "/server/data/cityOptions.json";

const selectedKey = ref("");
const selectedLabel = ref("");
const isCityDetecting = ref(false);

const options = Object.entries(cityOptions).map(([value, label]) => ({
  value,
  label,
}));

export function useCitySelector(emit) {
  //   const emit = defineEmits(["input"]);
  const open = ref(false);
  const router = useRouter();
  const route = useRoute();

  function toggleOpen() {
    open.value = !open.value;
  }

  async function onOptionClick(opt) {
    // console.log("click!!!");
    if (route.query.city === opt.value) {
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

    router.replace({
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
    // console.log(data.address.city);
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

    // if (route.query.city) {
    //   const pre = options.find((opt) => opt.value === route.query.city);
    //   if (pre) await onOptionClick(pre);
    //   return;
    // }

    // дефолтный город (перывй из json)
    if (options.length > 0) {
      await onOptionClick(options[0]);
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
    const found = options.find(
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
