import React from 'react'
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs'

const OG_IMAGE_URL = "/bubblegum_logo.svg"
export default {
  head() {
    const { frontMatter } = useConfig();

    return (
      <>
        {/* Favicons, meta */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            frontMatter.description ||
            "Controlled React Form + UI Components built with TailwindCSS, Radix UI, and React Hook Form."
          }
        />
        <meta
          name="og:description"
          content={
            frontMatter.description ||
            "Controlled React Form + UI Components built with TailwindCSS, Radix UI, and React Hook Form."
          }
        />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@handlehere" />
        <meta name="twitter:image" content={OG_IMAGE_URL} /> */}
        <meta
          name="og:title"
          content={
            frontMatter.title
              ? frontMatter.title + " – Bubblegum UI"
              : "Bubblegum Documentation"
          }
        />
        <meta name="og:image" content={OG_IMAGE_URL} />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Bubblegum UI",
    }
  },
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/bubblegum_logo.svg" alt="Bubblegum Logo" style={{ maxWidth: '3.2rem' }} />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>Bubblegum UI</span>
    </div>
  ),
  primaryHue: 317,
  project: {
    link: 'https://github.com/tayv/project-bubblegum',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/tayv/bubblegum-docs',
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true
  },
  footer: {
    text: (
      <span>
        Bubblegum UI: 
        <a href="https://mit-license.org/" target="_blank">
        {' '} MIT License {new Date().getFullYear()}
        </a>
      </span>
    )
  },
}


