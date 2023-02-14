/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = {
  reactStrictMode: true,
  images: {
    loader: "default",
    minimumCacheTTL: 60,
    domains: [
      "i.ibb.co",
      "assets-eu-01.kc-usercontent.com",
      "storage.googleapis.com",
      "www.acmilan.com",
      "localhost",
    ],
  },
};
