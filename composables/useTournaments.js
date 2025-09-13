function useTournaments() {
  const route = useRoute();
  const selectedCity = computed(() => route.params.city || "");

  const loading = ref(false);
  const error = ref(null);
  const rawData = ref([]);

  async function loadTournaments(cityName) {
    try {
      if (!cityName) return;

      loading.value = true;
      const res = await fetch(`/api/cities/${cityName}/tournaments`);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      rawData.value = data;
    } catch (err) {
      console.error(err, cityName, table);
      error.value = `Не удалось загрузить турниры для города: ${cityName}`;
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => loadTournaments(selectedCity.value));
  watch(selectedCity, (newCity) => loadTournaments(newCity));

  return { rawData, loading, error };
}

export default useTournaments;
