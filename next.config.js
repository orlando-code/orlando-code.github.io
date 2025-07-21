/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  output: "standalone",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig