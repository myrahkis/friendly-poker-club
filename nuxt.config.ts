export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title: "Покерный клуб «Friendly poker»",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Friendly Poker Club — легальная офлайн игра в покер. ",
        },
        { name: "author", content: "Friendly Poker Club" },
        { name: "robots", content: "index, follow" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://friendlypoker.ru/" },
      ],
    },
  },
  ssr: false,
  compatibilityDate: "2025-07-14",
  devtools: { enabled: true },
  build: {
    transpile: ["pdfjs-dist"],
  },
  vite: {
    ssr: {
      noExternal: ["pdfjs-dist"],
    },
  },
  css: ["@/assets/css/main.css"],
  nitro: {
    preset: "node-server",
  },
  runtimeConfig: {
    apiBase: process.env.API_BASE,
    public: {
      apiBase: process.env.API_BASE,
    },
  },
});
