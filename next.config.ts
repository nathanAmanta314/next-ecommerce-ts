import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["static.wixstatic.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
