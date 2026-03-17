import React, { useEffect, useRef } from 'react';

const ShakaPlayer = ({
  src,
  drmLicenseUrl,
  drmScheme = 'widevine',
  proxyReferer = '',
  proxyOrigin = '',
}) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const uiRef = useRef(null);

  useEffect(() => {
    // Ensure Shaka Player and browser compatibility
    if (!window.shaka) {
      console.error('Shaka Player is not loaded.');
      return;
    }

    window.shaka.polyfill.installAll();

    if (!window.shaka.Player.isBrowserSupported()) {
      console.error('Browser not supported by Shaka Player!');
      return;
    }

    const video = videoRef.current;
    const player = new window.shaka.Player(video);
    playerRef.current = player;

    const proxyBase = window.location.hostname === 'localhost'
      ? 'http://localhost:3000/proxy'
      : '/api/proxy';

    const customReferer = proxyReferer || import.meta.env.VITE_PROXY_REFERER;
    const customOrigin = proxyOrigin || import.meta.env.VITE_PROXY_ORIGIN;
    const hostWithoutHeaderOverrides = 'unifi-live2.secureswiftcontent.com';

    const networkingEngine = player.getNetworkingEngine();
    if (networkingEngine) {
      networkingEngine.registerRequestFilter((type, request) => {
        const RequestType = window.shaka.net.NetworkingEngine.RequestType;
        const shouldProxy = type === RequestType.MANIFEST || type === RequestType.SEGMENT;

        if (!shouldProxy) {
          return;
        }

        request.uris = request.uris.map((uri) => {
          if (uri.includes('/api/proxy?url=') || uri.includes('localhost:3000/proxy?url=')) {
            return uri;
          }

          const proxiedUrl = new URL(proxyBase, window.location.origin);
          proxiedUrl.searchParams.set('url', uri);
          const disableCustomHeaders = uri.includes(hostWithoutHeaderOverrides);

          if (customReferer && !disableCustomHeaders) {
            proxiedUrl.searchParams.set('referer', customReferer);
          }

          if (customOrigin && !disableCustomHeaders) {
            proxiedUrl.searchParams.set('origin', customOrigin);
          }

          return proxiedUrl.toString();
        });
      });
    }

    // Set up Shaka UI
    const ui = new window.shaka.ui.Overlay(player, video.parentElement, video);
    uiRef.current = ui;

    // Configure the UI to include quality control
    const uiConfig = {
      controlPanelElements: [
        'play_pause',
        'time_and_duration',
        'volume',
        'fullscreen',
        'quality', // Adds the quality control button to the main control panel
        'language',
      ],
      overflowMenuButtons: [
        'captions',
        'language',
      ],
      addSeekBar: true,
      addBigPlayButton: true,
    };
    ui.configure(uiConfig);

    // Player configuration
    const playerConfig = {
      drm: {},
      streaming: {
        bufferingGoal: 10,
        rebufferingGoal: 5,
      }
    };

    // Handle clearkey vs widevine
    if (drmScheme === 'clearkey' && drmLicenseUrl) {
      // Parse keyId:key format
      const parts = drmLicenseUrl.split(':');
      if (parts.length === 2) {
        playerConfig.drm.clearKeys = {
          [parts[0]]: parts[1]
        };
      }
    } else if (drmLicenseUrl) {
      playerConfig.drm.servers = {
        'com.widevine.alpha': drmLicenseUrl
      };
    }

    player.configure(playerConfig);
    
    // Load the video
    player.load(src)
      .then(() => {

        console.log('The video has been loaded successfully!');
      })
      .catch((error) => {
        console.error('Error loading video', error);
      });

    // Cleanup on unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      if (uiRef.current) {
        uiRef.current.destroy();
      }
    };
  }, [src, drmLicenseUrl, drmScheme, proxyReferer, proxyOrigin]);

  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          display: 'block',
          margin: '0 auto',
          width: '100%',
          maxWidth: '100%',
        }}
      />

<style jsx>{`
     

        /* Left section for play/pause and time */
        .shaka-play-pause-button,
        .shaka-current-time,
        .shaka-duration {
          order: -1; /* Move these elements to the left */
        }

        /* Ensure other controls stay on the right */
    
        .shaka-quality-control,
        .shaka-fullscreen-button,
        .shaka-volume-bar-container 
          {
              order: 1; /* Keep these on the right */
          }

        /* Optional: Adjust spacing */
        .shaka-controls-button {
          margin: 0 5px;
        }
      `}</style>

    </div>
  );
};

export default ShakaPlayer;
