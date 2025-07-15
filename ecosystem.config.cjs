module.exports = {
  apps: [
    {
      name: "friendly-poker-club",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
