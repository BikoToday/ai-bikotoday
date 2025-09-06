/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/help', permanent: false },
    ];
  },
};
module.exports = nextConfig;
