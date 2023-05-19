import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="36" height="36" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1814_123)">
        <circle cx="121" cy="112" r="90" fill="#FF4BCD"/>
        <circle cx="121" cy="112" r="90" fill="url(#paint0_radial_1814_123)" fill-opacity="0.41"/>
        <circle cx="121" cy="112" r="85" stroke="#F500B0" stroke-width="10"/>
        </g>
        <defs>
        <filter id="filter0_d_1814_123" x="0" y="0" width="242" height="242" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1814_123"/>
        <feOffset dy="9"/>
        <feGaussianBlur stdDeviation="17"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.294118 0 0 0 0 0.802353 0 0 0 0.67 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1814_123"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1814_123" result="shape"/>
        </filter>
        <radialGradient id="paint0_radial_1814_123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(140.138 90.2759) rotate(121.072) scale(94.2061)">
        <stop offset="0.259255" stop-color="white" stop-opacity="0.9"/>
        <stop offset="1" stop-color="#FF1EC0"/>
        </radialGradient>
        </defs>
      </svg>
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
