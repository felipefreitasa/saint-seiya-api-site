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
        source: "/api/:path*",
        destination:
          "https://cylindrical-bird-tikpmfl16khdrud9ijmvg8yd.herokudns.com/api/:path*", // Proxy para o Heroku
      },
    ];
  },
};

export default nextConfig;
