import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saintseiyaapi-71b85b0cc3ba.herokuapp.com",
      },
      {
        protocol: "https",
        hostname: "127.0.0.1",
        port: "3001",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "3001",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
