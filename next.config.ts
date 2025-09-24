import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static2.finnhub.io",
        port: "",
        pathname: "/file/publicdatany/finnhubimage/**",
      },
      {
        protocol: "https",
        hostname: "image.cnbcfm.com",
        port: "",
        pathname: "/api/v1/image/**",
      },
      {
        protocol: "https",
        hostname: "data.bloomberglp.com",
        port: "",
        pathname: "/company/sites/**",
      },
    ],
  },
};

export default nextConfig;
