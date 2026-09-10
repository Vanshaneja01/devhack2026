import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "10.153.51.184",
    "localhost:3000",
    "10.153.51.184:3000",
    "events2026.co.in",
    "www.events2026.co.in",
    "events2026.co.in:5002",
    "www.events2026.co.in:5002",
  ],
};

export default nextConfig;
