module.exports = {
  apps: [
    {
      name: "devhack2026",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 5002",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 5002,
      },
    },
  ],
};
