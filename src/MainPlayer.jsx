import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShakaPlayer from "./ShakaPlayer.jsx";
import Footer from "./Footer.jsx";

function MainPlayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { videoSrc, drmLicenseUrl, title, subtitle } = location.state || {}; // Prevent errors

  // Function to check if the video source is a YouTube link
  const isYouTubeLink = (url) => {
    return /(?:youtube\.com\/(?:[^\/]+\/.*|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/.test(url);
  };

  // Extract YouTube video ID from the URL
  const getYouTubeID = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.*|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/);
    return match ? match[1] : null;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
      <p className="text-lg text-gray-300 mb-6">{subtitle}</p>

      {videoSrc ? (
        <div className="w-full max-w-4xl">
          {isYouTubeLink(videoSrc) ? (
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
          )}
        </div>
      ) : (
        <p className="text-red-500 text-lg font-semibold">No video source available</p>
      )}

      <button
        onClick={() => navigate(-1)}
        className="mt-6 mb-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        ← Fila
      </button>

      <h3
        className="text-center text-gray-400 text-sm"
        style={{ maxWidth: "600px", margin: "0 auto" }}>
        Atu muda kualidade video karik Butaun Resolution agora iha ona player nia laran ho icon ⚙️
      </h3>

    </div>
  );
}

export default MainPlayer;
