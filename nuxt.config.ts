// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  app: {
    baseURL: "/friendly-poker-club/",
  },
  nitro: {
    // статический пресет для экспорта
    preset: "static",
    // опционально: автоматически обойти и собрать все маршруты по ссылкам внутри сайта
    prerender: {
      crawlLinks: true,
      routes: ["/"], // можно добавить дополнительные, если нужно
    },
  },
});
