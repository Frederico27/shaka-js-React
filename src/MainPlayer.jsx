import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShakaPlayer from "./ShakaPlayer.jsx";
import Footer from "./Footer.jsx";

function MainPlayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { videoSrc, drmLicenseUrl, title, subtitle } = location.state || {}; // Prevent errors

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
      <p className="text-lg text-gray-300 mb-6">{subtitle}</p>

      {videoSrc ? (
        <div className="w-full max-w-4xl">
          <ShakaPlayer src={videoSrc} drmLicenseUrl={drmLicenseUrl} />
        </div>
      ) : (
        <p className="text-red-500 text-lg font-semibold">No video source available</p>
      )}

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        ← Fila
      </button>
    </div>
  );
}

export default MainPlayer;
