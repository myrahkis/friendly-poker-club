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
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
          media: "print",
          onload: "this.media='all'",
        },
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
  devtools: { enabled: process.env.NODE_ENV === "development" },
  build: {
    transpile: ["pdfjs-dist"],
  },
  vite: {
    ssr: {
      noExternal: ["pdfjs-dist"],
    },
    build: {
      cssCodeSplit: true,
      minify: "esbuild",
      rollupOptions: {
        plugins: [
          visualizer({
            filename: "./stats.html",
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
        ],
      },
    },
  },
  css: ["@/assets/css/main.css"],
  nitro: {
    preset: "node-server",
    compressPublicAssets: true,
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
