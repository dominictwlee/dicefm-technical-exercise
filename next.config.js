/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dice-media.imgix.net"],
  },
};

module.exports = nextConfig;
