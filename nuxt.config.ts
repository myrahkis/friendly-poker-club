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
  },
  ssr: true,
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
    publicAssets: [{ dir: "server/data", baseURL: "/data" }],
  },
});
