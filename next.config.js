/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cmssun.etherstaging.xyz',
        pathname: '/**',
      },
    ],
  },
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