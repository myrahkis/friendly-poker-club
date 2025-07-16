module.exports = {
  apps: [
    {
      name: "friendly-poker-club",
      port: "4000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
