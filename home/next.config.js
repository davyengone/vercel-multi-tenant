const { BLOG_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
      {
        source: '/docs',
        destination: `${BLOG_URL}/docs`,
      },
      {
        source: '/docs/:path*',
        destination: `${BLOG_URL}/docs/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
