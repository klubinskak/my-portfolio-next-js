/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["user-images.githubusercontent.com", "i.ibb.co"],
  },
  typescript: {
    ignoreBuildErrors: true
}
};

module.exports = nextConfig
