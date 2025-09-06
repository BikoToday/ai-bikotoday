/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() { return []; }, // no external redirects
};
module.exports = nextConfig;
