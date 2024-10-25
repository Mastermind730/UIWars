import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['i.postimg.cc', 'pcet.org.in', 'via.placeholder.com'],
    unoptimized: true,
  },
};

export default nextConfig;
