module.exports = {
  apps: [
    {
      name: "friendly-poker-club",
      env: {
        NUXT_HOST: "127.0.0.1",
        NUXT_PORT: "4000",
      },
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
