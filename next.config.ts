import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.saintseiyaapi.com",
      },
    ],
  },
};

export default nextConfig;
