const nextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
})

module.exports = nextra({
  images: {
    unoptimized: true,
  },
  experimental: {
    allowedDevOrigins: [
      'http://localhost:4000',
      'https://regeln.werkstadtrp.de',
    ],
  },
})
