/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export is for `next build` / GitHub Pages. In dev it makes the
  // /blog/[...slug] catch-all claim static files under public/blog/*.
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
