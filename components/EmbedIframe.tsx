import React from 'react'

const EmbedIframe = ( {url} ) => (
  <iframe
    style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '2px' }}
    width="800"
    height="450"
    src={url}
    allowFullScreen
  />
)

export default EmbedIframe
