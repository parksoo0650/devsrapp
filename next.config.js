const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

module.exports = withPWA({
  swcMinify: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  async rewrites() {
    return [
        {
          source: '/youtube/playlistItems/:path*',
          destination: `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}:path*`,
        },
        {
          source: '/youtube/channels/:path*',
          destination: `https://www.googleapis.com/youtube/v3/channels/?key=${API_KEY}:path*`,
        },
        {
          source: '/youtube/search/:path*',
          destination: `https://www.googleapis.com/youtube/v3/search/?key=${API_KEY}:path*`,
        },
    ]
  },
})
