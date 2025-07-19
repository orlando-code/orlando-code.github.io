/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // output: "npx serve@latest out",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig