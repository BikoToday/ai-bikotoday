/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Controls who can embed YOUR pages (not what you iframe).
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self' https://gamma.app https://*.gamma.app" },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
