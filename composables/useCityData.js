export function useCityData(propertyName) {
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
      const module = await import(`@/assets/data/${cityName}.json`);
      const jsonDefault = module.default[propertyName] || {};
      rawData.value = jsonDefault;
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
