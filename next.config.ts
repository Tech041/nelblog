import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allows any domain
        pathname: "/**", // allows any path
      },
    ],
  },
};

export default nextConfig;
