/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // next.config.mjs

  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true, // Set to true jika redirect ini permanen
      },
    ];
  },

};

export default nextConfig;
