import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Bubblegum UI" />
      <meta property="og:description" content="Documentation for React UI and Controlled Form Components" />
    </>
  ),
  logo: (
    <>
      <img src="/bubblegum_logo.svg" alt="Bubblegum Logo" style={{ width: '34px', height: '34px' }}/>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>Bubblegum UI</span>
    </>
  ),
  primaryHue: 317,
  project: {
    link: 'https://github.com/tayv/project-bubblegum',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/tayv/bubblegum-docs',
  footer: {
    text: (
      <span>
        Bubblegum UI Components: 
        <a href="https://mit-license.org/" target="_blank">
        {' '} MIT License {new Date().getFullYear()}
        </a>
      </span>
    )
  },
}

export default config
