import React, { useEffect, useRef, useState } from 'react';
import shaka from 'shaka-player';

const ShakaPlayer = ({ src, drmLicenseUrl, drmKeySystem = 'com.widevine.alpha' }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [resolutions, setResolutions] = useState([]);
  const [selectedResolution, setSelectedResolution] = useState(null);

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
           
            '9afd72f20573001c23672d2158892a5f' : '9bc32df48a2efac30072b7e5c683bcd1',
           
          }
      },
      streaming: {
        autoPlay: true,
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
