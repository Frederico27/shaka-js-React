import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShakaPlayer from "./ShakaPlayer.jsx";
import Footer from "./Footer.jsx";

function MainPlayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { videoSrc, drmLicenseUrl, title, subtitle, drmScheme } = location.state || {};
  const [isLoading, setIsLoading] = useState(false);

  // Function to check if the video source is a YouTube link
  const isYouTubeLink = (url) => {
    if (!url) return false;
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Function to check if the URL appears to be a YouTube live stream
  const isYouTubeLive = (url) => {
    // Check for common live stream indicators in URL
    return (
      url &&
      (url.includes("/live/") ||
        url.includes("&live=1") ||
        url.includes("?live=1") ||
        url.includes("youtube.com/channel/") ||
        url.includes("youtube.com/c/"))
    );
  };

  // Extract YouTube video ID or channel ID from the URL
  const getYouTubeID = (url) => {
    if (!url) return null;

    // Handle channel URLs for live streams
    if (url.includes("/channel/")) {
      const channelMatch = url.match(/\/channel\/([^\/\?]+)/);
      return channelMatch ? channelMatch[1] : null;
    }

    if (url.includes("/c/")) {
      const cMatch = url.match(/\/c\/([^\/\?]+)/);
      return cMatch ? cMatch[1] : null;
    }

    // Handle regular video URLs and live URLs
    if (url.includes("/live/")) {
      const liveMatch = url.match(/\/live\/([^\/\?]+)/);
      return liveMatch ? liveMatch[1] : null;
    }

    // Standard YouTube video ID extraction
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.*|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/
    );
    return match ? match[1] : null;
  };

  // Function to create the YouTube embed URL with appropriate parameters
  const createYouTubeEmbedUrl = (videoId) => {
    if (!videoId) return "";

    // For live streams from channels, we need to use a different approach
    if (
      isYouTubeLive(videoSrc) &&
      (videoSrc.includes("/channel/") || videoSrc.includes("/c/"))
    ) {
      // If it's a channel URL, we embed the channel's live stream
      return `https://www.youtube.com/embed/live_stream?channel=${videoId}&autoplay=1&mute=0&rel=0&modestbranding=1`;
    }

    const baseUrl = `https://www.youtube.com/embed/${videoId}`;

    // Add parameters that work well for both regular videos and live streams
    const params = new URLSearchParams({
      autoplay: 1,
      mute: 0,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      enablejsapi: 1,
    });

    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
      <p className="text-lg text-gray-300 mb-6">{subtitle}</p>

      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="ml-3">Loading...</p>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          {videoSrc ? (
            isYouTubeLink(videoSrc) ? (
              <div className="relative w-full pb-[56.25%] overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={createYouTubeEmbedUrl(getYouTubeID(videoSrc))}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onError={(e) => {
                    console.error("YouTube embed error:", e);
                  }}
                ></iframe>
              </div>
            ) : (
              <ShakaPlayer src={videoSrc} drmLicenseUrl={drmLicenseUrl} drmScheme={drmScheme} />
            )
          ) : (
            <p className="text-red-500 text-lg font-semibold">
              No video source available
            </p>
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
        style={{ maxWidth: "600px", margin: "0 auto", marginBottom: "20px" }}
      >
        Atu muda kualidade video karik Butaun Resolution agora iha ona player
        nia laran ho icon ⚙️
      </h3>

      <h3
        className="text-center text-gray-400 text-sm"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        Karik video streaming la komesa automatikamente hanehan icon numeru
        minutu (ex: -50:00) iha video laran hodi hahu video streaming
      </h3>
    </div>
  );
}

export default MainPlayer;