export default defineNuxtRouteMiddleware(async (to, from) => {
  const cities = await $fetch("/api/city_options");
  const firstCity = cities[0]?.slug;
  if (firstCity) return navigateTo("/" + firstCity);
});
