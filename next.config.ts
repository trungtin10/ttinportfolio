/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true,
  },
  // THAY 'ttinportfolio' bằng tên Repository trên GitHub của bạn
  basePath: '/ttinportfolio', 
};

export default nextConfig;