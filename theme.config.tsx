import React from 'react'

const basePath = ''

const config = {
  logo: (
    <>
      <img src={`${basePath}/wrp.png`} width="36" />
      <h1 className="nx-font-bold nx-text-2xl">Werkstadt RP Regeln</h1>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/png" href={`${basePath}/wrp.png`} />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s Werkstadt RP',
    }
  },
  editLink: {
    component: () => <></>,
  },
  feedback: {
    content: () => <></>,
  },
  project: {
    link: 'https://github.com/WerkstadtRP/',
  },
  docsRepositoryBase: 'https://github.com/HydraCode-GH/docs-template',
  footer: {
    text: '© 2025 HydraCode.',
  },
}

export default config
