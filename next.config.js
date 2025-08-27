/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org', 'themoviedb.org'],
  },
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
  // Enable standalone output for Docker
  output: 'standalone',
  // Disable telemetry (this is handled differently in Next.js 14)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
