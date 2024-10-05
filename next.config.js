const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  rewrites: async () => [{ source: '/', destination: '/en' }]
}

module.exports = withNextIntl(nextConfig)
