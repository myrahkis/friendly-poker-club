// export default defineNuxtRouteMiddleware(async (to) => {
//   if (to.path !== "/") return;

//   const config = useRuntimeConfig();
//   let cityOptions = {};

//   try {
//     cityOptions = await fetch(`${config.public.apiBase}/data/cityOptions.json`);
//   } catch (e) {
//     console.warn("Не удалось загрузить cityOptions для редиректа:", e);
//     return;
//   }

//   const keys = Object.keys(cityOptions);
//   if (keys.length === 0) {
//     console.warn("cityOptions пустой, редирект не выполняем");
//     return;
//   }
//   const firstCity = keys[0];
//   return navigateTo(`/${firstCity}`, { replace: true });
// });
