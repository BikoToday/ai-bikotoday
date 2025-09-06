/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/help",
        destination: "https://www.chatbase.co/DWCuKMIQrgol47UDlGucO/help",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
