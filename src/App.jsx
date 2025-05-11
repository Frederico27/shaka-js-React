import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Footer from "./Footer";
import Modal from "./Modal";

function App() {
  // State to track if the app version is supported
  const [isSupported, setIsSupported] = useState(true);

  const [showModal, setShowModal] = useState(() => {
    // Try to get data from multiple storage methods for maximum compatibility
    let shouldShowModal = true;

    try {
      // Try localStorage first
      const modalData = localStorage.getItem("modalData");
      if (modalData) {
        const { timestamp } = JSON.parse(modalData);
        const now = new Date().getTime();
        const minutesToExpire = 15; // Modal reappears after 30 minutes
        const expirationTime = minutesToExpire * 60 * 1000;
        shouldShowModal = now - timestamp > expirationTime;
      }
    } catch (error) {
      console.log("localStorage access failed, trying cookies");
      // If localStorage fails, try cookies
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith("modalTimestamp=")) {
          const timestamp = parseInt(
            cookie.substring("modalTimestamp=".length),
            10
          );
          const now = new Date().getTime();
          const minutesToExpire = 15; // Modal reappears after 30 minutes
          const expirationTime = minutesToExpire * 60 * 1000;
          shouldShowModal = now - timestamp > expirationTime;
          break;
        }
      }
    }

    return shouldShowModal;
  });

  // Define the minimum supported version
  const MINIMUM_SUPPORTED_VERSION = "1.1.0";

  useEffect(() => {
    checkAppVersion();
  }, []);

  //close modal
  // const closeModal = () => {
  //   const timestamp = new Date().getTime();

  //   // Try both storage methods for maximum compatibility
  //   try {
  //     // Store in localStorage
  //     localStorage.setItem("modalData", JSON.stringify({ timestamp }));
  //   } catch (error) {
  //     console.log("localStorage save failed, using cookies");
  //   }

  //   // Also store in cookies as fallback
  //   const expiryDate = new Date();
  //   expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000); // 1 day expiry
  //   document.cookie = `modalTimestamp=${timestamp};expires=${expiryDate.toUTCString()};path=/`;

  //   setShowModal(false);
  // };

  // Function to check if the app version is supported
  const checkAppVersion = () => {
    // Get app version from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    let appVersion = urlParams.get("appVersion");

    // Try to get app version from JavaScript interface if available
    if (window.AndroidApp) {
      try {
        appVersion = window.AndroidApp.getAppVersion();
      } catch (error) {
        console.error(
          "Failed to get version from AndroidApp interface:",
          error
        );
      }
    }

    // Fallback to injected version if available
    if (!appVersion && window.APP_VERSION) {
      appVersion = window.APP_VERSION;
    }

    // If we have a version, check if it's supported
    if (appVersion) {
      const isVersionSupported = isVersionGreaterOrEqual(
        appVersion,
        MINIMUM_SUPPORTED_VERSION
      );
      setIsSupported(isVersionSupported);
    }
  };

  // Helper function to compare version strings
  const isVersionGreaterOrEqual = (version1, version2) => {
    const v1 = version1.split(".").map(Number);
    const v2 = version2.split(".").map(Number);

    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
      const num1 = i < v1.length ? v1[i] : 0;
      const num2 = i < v2.length ? v2[i] : 0;

      if (num1 > num2) return true;
      if (num1 < num2) return false;
    }

    return true; // Equal versions
  };

  // If the app version is not supported, show update message
  if (!isSupported) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-6">Presija Update Aplikasaun</h1>
          <p className="text-lg mb-6">
            Ita boot presija update Ailok TV ba versaun foun liu hodi kontinua
            uza aplikasaun.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.example.myapplication"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-600 transition-colors"
          >
            Update Agora
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Auto-opening modal
      {showModal && (
        <Modal onClose={closeModal}>
          <h5 className="text-center text-2xl font-bold mb-4">
            Avisu Importante !
          </h5>
          <div className="flex justify-center w-full mb-3">
            <img
              src="/images/pope.png"
              alt="Important Notice"
              className="w-80 h-78 rounded-full border-4 border-gray-500"
            />
          </div>
          <p className="text-center text-md">Omenajen ba Papa Francisco.</p>
          <br></br>
          <p className="text-center text-md">REST IN PEACE POPE FRANCIS 🕊️🇻🇦</p>
          <br></br>
          <p className="text-justify text-md">
            Karik kolega sira iha sujestaun no mensajen ruma atu hatoo
            bele&nbsp;
            <a href="/feedback" className="text-blue-500">
              klik iha textu ne'e
            </a>
          </p>
        </Modal>
      )} */}

      <div className="text-center py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <h1 className="text-4xl sm:text-5xl mt-7 font-extrabold tracking-wide mb-4">
          Jogu Futebol ne'ebe Live iha{" "}
          <span className="text-blue-400">Ailok TV ⚽</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Bele Asiste husi{" "}
          <span className="text-yellow-400 font-semibold">Laptop</span>,
          <span className="text-green-400 font-semibold"> Telefone</span> (uza
          Chrome),
          <span className="text-blue-400 font-semibold">
            {" "}
            Televizaun Android
          </span>{" "}
          nst!
        </p>
       
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-3">
        {/* Card goes Here */}

        <Card
          title="Barcelona vs Real Madrid"
          loron={"11 Maiu 2025"}
          oras={"Kick off 23:15 OTL | Komentariu Ingles"}
          tumbnail={
            "https://sportal.betxchange.com/wp-content/uploads/2025/04/El-Clasico.jpg"
          }
          videoSrc="https://a166aivottlinear-a.akamaihd.net/OTTB/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd"
          drmLicenseUrl="https://real-madrid-drm-url"
          nsurl={
            "intent://a166aivottlinear-a.akamaihd.net/OTTB/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleCoreMedia/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chromecast/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=620e51b82596475517a27aa425c52280:2b9ba811e9c5aeafc8ae1b71cdca4d6a#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=LIVETV;end"
          }
        />

        <Card
          title="Barcelona vs Real Madrid"
          loron={"11 Maiu 2025"}
          oras={"Kick off 23:15 OTL | Komentariu Ingles"}
          tumbnail={
            "https://sportal.betxchange.com/wp-content/uploads/2025/04/El-Clasico.jpg"
          }
          vide
          videoSrc="https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/6fbnr3ei4b/out/v1/57d2ae96a4cc4230881cd801b389edf6/cenc.mpd"
          drmLicenseUrl="https://real-madrid-drm-url"
          nsurl={
            "intent://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/6fbnr3ei4b/out/v1/57d2ae96a4cc4230881cd801b389edf6/cenc.mpd%7CUser-Agent=Mozilla/5.0&drmScheme=clearkey&drmLicense=9afd72f20573001c23672d2158892a5f:9bc32df48a2efac30072b7e5c683bcd1#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=LIVETV;end"
          }
        />

        <Card
          title="Live Liga Inglesa"
          oras={"Kanal Foka ba Jogu sira seluk Liga Inglesa nian"}
          tumbnail={
            "https://yt3.googleusercontent.com/zhPMOpUIlmMa_xAgrHYGYrkCSWS-3tE0yPPKVUzh1iiYOF1QDqGtg3ZIbWXjkNmN3l3WPqziRHE=s900-c-k-c0x00ffffff-no-rj"
          }
          videoSrc="https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd"
          drmLicenseUrl="https://real-madrid-drm-url"
          nsurl={
            "intent://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleCoreMedia/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chromecast/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=44dd9cd370b08a868ead115fe84ecfde:bff19ab0a51cf14e848389b152913fd0#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=LIVETV;end"
          }
        />

        <Card
          title="Live Liga Espanha"
          oras={"Kanal Foka ba Jogu sira seluk Liga Espanha nian"}
          tumbnail={
            "https://logowik.com/content/uploads/images/laliga-2023-2024-new3252.logowik.com.webp"
          }
          videoSrc="https://a166aivottlinear-a.akamaihd.net/OTTB/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd"
          drmLicenseUrl="https://real-madrid-drm-url"
          nsurl={
            "intent://a166aivottlinear-a.akamaihd.net/OTTB/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleCoreMedia/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chromecast/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=620e51b82596475517a27aa425c52280:2b9ba811e9c5aeafc8ae1b71cdca4d6a#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=LIVETV;end"
          }
        />

        <Card
          title="Live Liga Alemanha"
          oras={"Kanal Foka ba Jogu sira seluk Liga Alemanha nian"}
          tumbnail={
            "https://www.idman.biz/media/2024/07/16/1920x1280/bundesliga.webp?v=1721130454"
          }
          videoSrc="https://aivottlinear-a.akamaihd.net/OTTE/DUB/live/dash/enc/k2dcwnlpgr/out/v1/0502dc73a24b43a79c042bf2d14f6b84/cenc.mpd"
          drmLicenseUrl="https://real-madrid-drm-url"
          nsurl={
            "intent://tataplay.slivcdn.com/hls/live/2020434/TEN2HD/master.m3u8|User-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/605.1.15/Clipbox+/2.2.8& Vinebre#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=LIVETV;end"
          }
        />

        <Card
          title="Live Liga Italia"
          oras={"Kanal Foka ba Jogu sira seluk Liga Italia nian"}
          tumbnail={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Serie_A_logo_2022.svg/1200px-Serie_A_logo_2022.svg.png"
          }
          videoSrc="https://uselector.cdn.intigral-ott.net/ADSP1/ADSP1.isml/manifest.mpd"
          drmLicenseUrl="https://real-madrid-drm-url"
          nsurl={
            "intent://uselector.cdn.intigral-ott.net/ADSP1/ADSP1.isml/manifest.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=eb5a3a48f3e191a00e3ac1e2d470c491:2c8b7198563527e524d66628c092ef1f#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=LIVETV;end"
          }
        />

        <Card
          oras={"Komesa Semana Oin"}
          tumbnail={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17waUfO3dHURK40tmMJsQGRE6SXdCEZ-B3Q&s"
          }
          videoSrc="https://www.youtube.com/watch?v=6SckdpiJ8oM"
          drmLicenseUrl="https://real-madrid-drm-url"
          subtitle={"Quarter Finals"}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;