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
  async rewrites() {
    return [
      {
        source: "/api/(.*)",
        destination: "https://api.saintseiyaapi.com/$1",
      },
    ];
  },
};

export default nextConfig;
