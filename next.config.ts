import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: "/about", destination: "/a-propos", permanent: true },
      { source: "/community", destination: "/communaute", permanent: true },
      { source: "/news", destination: "/actualites", permanent: true },
      { source: "/projects", destination: "/", permanent: true },
      { source: "/projects/yatela", destination: "/", permanent: true },
      { source: "/awards/incubation-politique", destination: "/actualites", permanent: true },
    ];
  },
};

export default nextConfig;
