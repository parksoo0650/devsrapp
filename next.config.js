const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  swcMinify: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
})
