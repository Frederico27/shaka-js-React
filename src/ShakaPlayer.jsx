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
                  // 'd84c325f36814f39bbe59080272b10c3':'550727de4c96ef1ecff874905493580f',
                  // '16bf72dc22743d929c4318e193408373':'eae51a1e3904124963074cbf432c7c8e',
                  // 'eaea45512d137def15b209a089cafd14':'8d42db746ed0c4df61729b0d68d42bd7',
                  // '91b9592c819246c68b3b08a1fe08ba22':'fa0d80dfd865b34077bae44cd4a0c5e6',
                  // '53c3bf2eba574f639aa21f2d4409ff11':'3de28411cf08a64ea935b9578f6d0edd',
                  '2eae64f36919660fb5df0396746db524':'971aa1f075a00ef73eb9029f781838f5',
                  // '57e48b99f3f6d4f13f5c5afdcca084ca':'29379a5e2d3405fad2f5d9cbe92586c3',
                  // '44dd9cd370b08a868ead115fe84ecfde':'bff19ab0a51cf14e848389b152913fd0',
                  // '78ab64fa90f137a697743b5dc27b2f96':'de4d31c7fc6005ede28abab2a0720a9f',
                  // 'ecbc9e6fe6b145efb6658fb5cf7427f8':'03c17e28911f71221acbc0b11f900401',
                  // '002046c9a49b9ab1cdb6616bec5d26c3':'d2f92f6b7edc9a1a05d393ba0c20ef9e',
                  '0cadd460065c412ec1422700b68fb7dc':'b4760d7e983c89e471628a0741749db1',
                  '9afd72f20573001c23672d2158892a5f':'9bc32df48a2efac30072b7e5c683bcd1',
                  'eb5a3a48f3e191a00e3ac1e2d470c491':'2c8b7198563527e524d66628c092ef1f',
                  '7eea72d6075245a99ee3255603d58853':'6848ef60575579bf4d415db1032153ed',
                  '43d1c3b25207ff38b22ccfe17d302367':'7b1f85f6e81059473b114c16a25c829a',
                  '333962e3e1383529867a9a0e28a5e5d1':'5d3fcbed53749ee622ed0e64f31c1cbf',
                  '0eab5a3f3e3b4ba5d42d40ca30d17571':'f3f061ded9b70e8160590d5802ecda6d',
                  '0045a118e231f1326bcdb45350b1ceaa':'8c13afbfa54ea37a368b8b859021f6e3',
                  'd8d0506523d95fc082d6caef60e84979':'69992fd2d7b9211d41ecc2243803e87c',
                  'ae26845bd33038a9c0774a0981007294':'63ac662dde310cfb4cc6f9b43b34196d',
                  '6d1708b185c6c4d7b37600520c7cc93c':'1aace05f58d8edef9697fd52cb09f441',
                  'fe4e1cd2eea9e7ac5b365c261e41c57c':'38dd1a0751aa0f04f2035636cf0608eb',
                  '4e993aa8c1f295f8b94e8e9e6f6d0bfe':'86a1ed6e96caab8eb1009fe530d2cf4f',
                  '9872e439f21f4a299cab249c6554daa3':'0cdfcfe0d0f1fbe100554ce3ef4c4665',
                  '620e51b82596475517a27aa425c52280':'2b9ba811e9c5aeafc8ae1b71cdca4d6a',
                  '4b203316c47c370a1eb9097c070d7226':'676e6783f23789cdf4ff0486386145ed',
                  'dc69b6159a0f9f0a4e03b3ff91cbacd5':'d0dcbcd7723bc40df0bf34c9c092d51f',
                  'c88b512b17ab4f6cb09eb0ff4a1056ed':'adc08ee1c20a734972a55c9aebbd1888',
                  'dca8597f12f8d6928b55c1291c7bb300':'36c8b3f51d474b95f0adad70899343e1',
        },
      },
      streaming : {
        bufferingGoal: 10,
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