import React from 'react'
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs'

const OG_IMAGE_URL = "/bubblegum_logo.svg"
export default {
  // head: (
  //   <>
  //     <link rel="shortcut icon" href="/favicon.ico" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <meta property="og:title" content="Bubblegum UI" />
  //     <meta property="og:description" content="Documentation for React UI and Controlled Form Components" />
  //   </>
  // ),
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
        <link rel="shortcut icon" href="/favicon.ico" />
      </>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Bubblegum UI",
    };
  },
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


