/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src/assets/sass'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'core.alltour.by',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
