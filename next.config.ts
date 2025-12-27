import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Bắt buộc dòng này để hiện ảnh
  },
  basePath: "/ttinportfolio", // Bắt buộc dòng này để chạy trên Github
};

export default nextConfig;