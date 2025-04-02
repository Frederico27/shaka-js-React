import React, { useState } from 'react'
import ShakaPlayer from './ShakaPlayer.jsx'
import './App.css'

function App() {
  const videoSrc = 'https://ssc-1-enc.edgenextcdn.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd'; // Replace with your manifest URL.
  const drmLicenseUrl = 'https://your-drm-license-server-url'; // Replace with your DRM license server URL.

  return (
    <>
      <h1>Barcelona vs Atletico Madrid</h1>
      <p>Hala Madrid! Hein ami iha final 🤍.</p>
      <ShakaPlayer 
        style={{ 
          display: 'block',
          margin: '0 auto',
          maxWidth: '100%'
        }} 
        src={videoSrc} 
        drmLicenseUrl={drmLicenseUrl}
      />
    </>
  )
}


export default App
