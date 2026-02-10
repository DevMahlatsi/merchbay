import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://192.168.18.52",
    "http://localhost:3000",
  ],
};

export default nextConfig;
