import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Chắc chắn dòng này phải đúng tên repo của bạn
  basePath: "/ttinportfolio", 
};

export default nextConfig;