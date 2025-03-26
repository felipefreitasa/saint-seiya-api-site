import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saintseiyaapi-71b85b0cc3ba.herokuapp.com",
      },
    ],
  },
};

export default nextConfig;
