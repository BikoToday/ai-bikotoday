/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Allow Gamma to embed your site
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://gamma.app https://*.gamma.app;",
          },
          // Do NOT set X-Frame-Options (it would override CSP and block framing)
        ],
      },
    ];
  },
};

export default nextConfig;
