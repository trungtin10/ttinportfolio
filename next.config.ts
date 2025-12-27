/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bắt buộc để deploy GitHub Pages
  basePath: '/trungtindev', // Tên repository của bạn
  images: {
    unoptimized: true, // GitHub Pages không hỗ trợ tối ưu ảnh mặc định của Next.js
  },
};
export default nextConfig;