import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShakaPlayer from "./ShakaPlayer.jsx";
import Footer from "./Footer.jsx";

function MainPlayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { videoSrc, drmLicenseUrl, title, subtitle, nsurl } = location.state || {}; // Prevent errors
  const [isAppInstalled, setIsAppInstalled] = useState(false); // Track if NSPlayer is installed
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  // Function to check if the video source is a YouTube link
  const isYouTubeLink = (url) => {
    return /(?:youtube\.com\/(?:[^\/]+\/.*|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/.test(url);
  };

  // Extract YouTube video ID from the URL
  const getYouTubeID = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.*|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/);
    return match ? match[1] : null;
  };

  // Function to check if NSPlayer is installed and open the video
  const checkNSPlayerAndOpen = () => {
    const appUrl = nsurl;
    
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    iframe.src = appUrl;

    // Set a timeout to check if the app opened after 500ms
    const timeout = setTimeout(() => {
      document.body.removeChild(iframe);
      setIsAppInstalled(false); // If the app isn't installed, use fallback
      setIsLoading(false); // Done loading
    }, 500);

    // Handle visibility change to confirm if NSPlayer is opened
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timeout);
        setIsAppInstalled(true);
        setIsLoading(false); // Done loading
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  };

  // Once the component mounts, check for NSPlayer availability
  useEffect(() => {
    checkNSPlayerAndOpen();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
      <p className="text-lg text-gray-300 mb-6">{subtitle}</p>

      {isLoading ? (
        <p>Loading...</p> // You can replace this with a loading spinner or text
      ) : (
        <div className="w-full max-w-4xl">

        {isAppInstalled === false && (
              <button
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.genuine.leone')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Ba Telfone sira presija Download NSPlayer husi Play Store
              </button>
            )}


          {isAppInstalled ? (
            // If NSPlayer is installed, open in the app
            <div className="flex justify-center items-center h-full">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg">
              Open NSPlayer
            </button>
          </div>
          ) : videoSrc ? (
            isYouTubeLink(videoSrc) ? (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-[450px]"
                  src={`https://www.youtube.com/embed/${getYouTubeID(videoSrc)}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <ShakaPlayer src={videoSrc} drmLicenseUrl={drmLicenseUrl} />
            )
          ) : (
            <p className="text-red-500 text-lg font-semibold">No video source available</p>
          )}
        </div>
      )}

      <button
        onClick={() => navigate(-1)}
        className="mt-6 mb-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        ← Fila
      </button>

      <h3
        className="text-center text-gray-400 text-sm mb-3"
        style={{ maxWidth: "600px", margin: "0 auto", marginBottom: "20px" }}>
        Atu muda kualidade video karik Butaun Resolution agora iha ona player nia laran ho icon ⚙️
      </h3>

      <h3
        className="text-center text-gray-400 text-sm"
        style={{ maxWidth: "600px", margin: "0 auto" }}>
        Karik video streaming la komesa automatikamente hanehan icon numeru minutu (ex:  -50:00) iha video laran hodi hahu video streaming 
      </h3>
    </div>
  );
}

export default MainPlayer;
