import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/chzzk/:path*',
        destination: 'https://api.chzzk.naver.com/:path*',
      },
    ];
  },
};

export default nextConfig;
