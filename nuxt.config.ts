// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title: "Friendly poker club",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    baseURL: "/friendly-poker-club/",
  },
  ssr: false,
  compatibilityDate: "2025-05-15",
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
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
});
