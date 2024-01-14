/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
    typedRoutes: true,
    taint: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
