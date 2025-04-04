import React, { useEffect, useRef } from 'react';

const ShakaPlayer = ({ src, drmLicenseUrl, drmKeySystem = 'com.widevine.alpha' }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const uiRef = useRef(null);

  useEffect(() => {
    // Ensure Shaka Player and browser compatibility
    if (!shaka.Player.isBrowserSupported()) {
      console.error('Browser not supported by Shaka Player!');
      shaka.polyfill.installAll();
      return;
    }

    shaka.polyfill.installAll();

    const video = videoRef.current;
    const player = new shaka.Player(video);
    playerRef.current = player;

    // Set up Shaka UI
    const ui = new shaka.ui.Overlay(player, video.parentElement, video);
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
        'cast',
      ],
      addSeekBar: true,
      addBigPlayButton: true,
    };
    ui.configure(uiConfig);

    // Player configuration
    player.configure({
      drm: {
        servers: {
          [drmKeySystem]: drmLicenseUrl,
        },
        clearKeys: {
          'd84c325f36814f39bbe59080272b10c3': '550727de4c96ef1ecff874905493580f',
          '0c900a7eae0097e0977141b68c9bffc4': 'fa534e6d48eccf905a449051a5e280c8',
          '44dd9cd370b08a868ead115fe84ecfde': 'bff19ab0a51cf14e848389b152913fd0',
          '78ab64fa90f137a697743b5dc27b2f96': 'de4d31c7fc6005ede28abab2a0720a9f',
          'ecbc9e6fe6b145efb6658fb5cf7427f8': '03c17e28911f71221acbc0b11f900401',
          '002046c9a49b9ab1cdb6616bec5d26c3': 'd2f92f6b7edc9a1a05d393ba0c20ef9e',
          '9afd72f20573001c23672d2158892a5f': '9bc32df48a2efac30072b7e5c683bcd1',
          'eb5a3a48f3e191a00e3ac1e2d470c491': '2c8b7198563527e524d66628c092ef1f',
          '7eea72d6075245a99ee3255603d58853': '6848ef60575579bf4d415db1032153ed',
          '43d1c3b25207ff38b22ccfe17d302367': '7b1f85f6e81059473b114c16a25c829a',
        },
      },
      streaming : {
        bufferingGoal: 20,
        rebufferingGoal: 5,
      }
    });


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
  }, [src, drmLicenseUrl, drmKeySystem]);

  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      <video
        ref={videoRef}
        autoPlay
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