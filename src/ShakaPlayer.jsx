import React, { useEffect, useRef, useState } from 'react';
import shaka from 'shaka-player';

const ShakaPlayer = ({ src, drmLicenseUrl, drmKeySystem = 'com.widevine.alpha' }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [resolutions, setResolutions] = useState([]);
  const [selectedResolution, setSelectedResolution] = useState(null);

  // Install polyfills if needed (e.g., for older browsers)
  shaka.polyfill.installAll();

  useEffect(() => {
    if (!shaka.Player.isBrowserSupported()) {
      console.error('Browser not supported by Shaka Player!');
      return;
    }

    const video = videoRef.current;
    const player = new shaka.Player(video);
    playerRef.current = player;

    player.addEventListener('error', (event) => {
      console.error('Error code', event.detail.code, 'object', event.detail);
    });

    player.configure({
      drm: {
        servers: {
          [drmKeySystem]: drmLicenseUrl,
        },
        clearKeys: {
            'd84c325f36814f39bbe59080272b10c3' : '550727de4c96ef1ecff874905493580f',
            '0c900a7eae0097e0977141b68c9bffc4' : 'fa534e6d48eccf905a449051a5e280c8',
            '44dd9cd370b08a868ead115fe84ecfde' : 'bff19ab0a51cf14e848389b152913fd0',
            '78ab64fa90f137a697743b5dc27b2f96' : 'de4d31c7fc6005ede28abab2a0720a9f',
            'ecbc9e6fe6b145efb6658fb5cf7427f8' : '03c17e28911f71221acbc0b11f900401',
            '002046c9a49b9ab1cdb6616bec5d26c3' : 'd2f92f6b7edc9a1a05d393ba0c20ef9e',
            '9afd72f20573001c23672d2158892a5f' : '9bc32df48a2efac30072b7e5c683bcd1',
            'eb5a3a48f3e191a00e3ac1e2d470c491' : '2c8b7198563527e524d66628c092ef1f',
          }
      },
      streaming : {
        autoPlay: true,
        jumpLargeGaps: true, // Allow jumping large gaps in the stream
      },
      abr: {
        enabled: true,
      }
    });
    

    player.load(src)
      .then(() => {
        console.log('The video has been loaded successfully!');
        updateResolutions(player);
      })
      .catch((error) => {
        console.error('Error loading video', error);
      });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [src, drmLicenseUrl, drmKeySystem]);

  const updateResolutions = (player) => {
    const tracks = player.getVariantTracks();
    const uniqueResolutions = Array.from(new Set(tracks.map(track => track.height)))
      .sort((a, b) => a - b);
    setResolutions(uniqueResolutions);
  };

  const changeResolution = (height) => {
    const player = playerRef.current;
    if (!player) return;
    
    if (height === '') {
      // If "Auto" is selected, enable adaptive streaming
      player.configure('abr.enabled', true);
      setSelectedResolution('');
    } else {
      // Disable adaptive streaming when specific resolution is selected
      player.configure('abr.enabled', false);
      const tracks = player.getVariantTracks();
      const selectedTracks = tracks.filter(track => track.height === height);
      if (selectedTracks.length > 0) {
        player.selectVariantTrack(selectedTracks[0]);
        setSelectedResolution(height);
      }
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        controls
        autoPlay
        style={{ 
          display: 'block',
          margin: '0 auto',
          width: '100%',
          maxWidth: '100%'
        }}
      />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <label>Resolution: </label>
        <select
          onChange={(e) => changeResolution(e.target.value ? parseInt(e.target.value) : '')}
          value={selectedResolution || ''}
        >
          <option value="">Auto</option>
          {resolutions.map(res => (
            <option key={res} value={res}>{res}p</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ShakaPlayer;
