import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Tên repo của bạn là ttinportfolio, nên basePath phải y hệt
  basePath: "/ttinportfolio", 
};

export default nextConfig;