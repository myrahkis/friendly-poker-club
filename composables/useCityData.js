export function useCityData(propertyName) {
  const config = useRuntimeConfig();
  const route = useRoute();

  const loading = ref(false);
  const error = ref(null);
  const rawData = ref([]);
  const data = ref([]);

  const selectedCity = computed(() => route.query.city || "");

  async function loadCityData(cityName) {
    if (!cityName) return;

    loading.value = true;
    error.value = null;
    rawData.value = [];
    data.value = [];

    try {
      const res = await fetch(`${config.public.apiBase}/data/${cityName}.json`);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const json = await res.json();
      rawData.value = json[propertyName] ?? [];
    } catch (err) {
      console.error(err);
      error.value = `Не удалось загрузить данные для города: ${cityName}`;
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => loadCityData(selectedCity.value));
  watch(selectedCity, (newCity) => loadCityData(newCity));

  return {
    loading,
    error,
    rawData,
  };
}
