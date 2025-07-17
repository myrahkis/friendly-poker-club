module.exports = {
  apps: [
    {
      name: "friendly-poker-club",
      env: {
        HOST: "127.0.0.1",
        PORT: "4000",
      },
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
