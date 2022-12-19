/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/nextjs-fithub",
  assetPrefix: "/nextjs-fithub"
}

module.exports = nextConfig
