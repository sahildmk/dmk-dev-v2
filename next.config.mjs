/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/london-js-2026-02-25",
        destination: "/talks/stopped-hand-writing-code",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
