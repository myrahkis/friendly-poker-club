import { visualizer } from "rollup-plugin-visualizer";

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
        {
          rel: "icon",
          type: "image/png",
          href: "/favicons/favicon-96x96.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicons/favicon.svg" },
        { rel: "shortcut icon", href: "/favicons/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/favicons/site.webmanifest" },
      ],
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
    build: {
      rollupOptions: {
        // plugins: [
        //   visualizer({
        //     filename: "./stats.html",
        //     open: true,
        //     gzipSize: true,
        //     brotliSize: true,
        //   }),
        // ],
      },
    },
  },
  css: ["@/assets/css/main.css"],
  nitro: {
    preset: "node-server",
  },
  runtimeConfig: {
    apiBase: process.env.API_BASE,
    ymId: process.env.YM_COUNTER_ID,
    public: {
      apiBase: process.env.API_BASE,
      ymId: process.env.YM_COUNTER_ID,
    },
  },
});
