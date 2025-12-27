import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Dòng này giúp xuất ra file HTML tĩnh (thư mục 'out')
  output: 'export',
  
  // 2. Tắt tối ưu hóa ảnh mặc định (vì GitHub Pages không có server xử lý ảnh)
  images: {
    unoptimized: true,
  },

  // 3. QUAN TRỌNG: Nếu bạn chưa có tên miền riêng, phải thêm tên repo vào đây
  // Nếu repo bạn tên là 'ttinportfolio', hãy để dòng dưới. 
  // Nếu sau này mua tên miền riêng (.com) thì xóa dòng này đi.
  basePath: "/ttinportfolio",
};

export default nextConfig;