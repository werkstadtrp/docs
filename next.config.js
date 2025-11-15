const nextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {},
  allowedDevOrigins: ['http://localhost:4000', 'regeln.werkstadtrp.de'],
}

module.exports = nextra(nextConfig)
