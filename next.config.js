/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["shiki"],
  },
};

module.exports = nextConfig;
