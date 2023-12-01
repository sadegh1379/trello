/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // mine worked fine without this line
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
}

module.exports = nextConfig
