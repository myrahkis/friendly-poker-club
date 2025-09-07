export function useCityData(table) {
  const route = useRoute();

  const loading = ref(false);
  const error = ref(null);
  const rawData = ref([]);
  const data = ref([]);

  const selectedCity = computed(() => route.params.city || "");

  async function loadCityData(cityName) {
    if (!cityName) return;

    loading.value = true;
    error.value = null;
    rawData.value = [];
    data.value = [];

    try {
      const res = await fetch(`/api/cities/${cityName}/${table}`);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const json = await res.json();
      rawData.value = JSON.parse(json[0].data) ?? [];
    } catch (err) {
      console.error(err, cityName, table);
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
