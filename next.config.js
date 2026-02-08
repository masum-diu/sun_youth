/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/graphql/:path*',
        destination: 'https://cmssun.etherstaging.xyz/graphql/:path*',
      },
    ];
  },
};

module.exports = nextConfig;