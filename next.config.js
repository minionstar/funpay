/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["funpay.com"],
  },
};

module.exports = nextConfig;
