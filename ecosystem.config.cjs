module.exports = {
  apps: [
    {
      name: "devhack2026",
      // Direct binary execution enables native cluster mode in PM2
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: "max", // Uses all available CPU cores (or set to 1, 2, etc.)
      exec_mode: "cluster", // Enables load balancing across instances
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
