import React from "react";
import "./App.css";
import Card from "./Card";
import Footer from "./Footer";

function App() {
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
          title="Boxing Many Pacquiao vs Barrios"
          loron={"19 Jullu 2025"}
          oras={"Haree orariu kompleta iha Google"}
          tumbnail={"https://ringmagazine.com/_next/image?url=https%3A%2F%2Fthankful-crystal-c5f59294d4.media.strapiapp.com%2F07_19_PPV_1920x1080_web_e59418f263.jpg&w=1920&q=75"}
          videoSrc="http://clive.malisresidences.com:1935/rhm_hdtv/_definst_/smil:RHMHDTV.smil/playlist.m3u8"
          drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card
          title="AFF ASEAN U23 Indonezia (Ingles)"
          loron={"15 Jullu - 29 Jullu 2025"}
          oras={"Haree orariu kompleta iha Google"}
          tumbnail={
            "https://i.ytimg.com/vi/6BguoM3Q_YQ/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGBMgMyh_MA8=&rs=AOn4CLDhimAdRzTjo2_7VeL0y5x4n8LGKw"
          }
          videoSrc="https://tglmp04.akamaized.net/out/v1/400fc0702dee453bb33ebcc29466e58a/manifest.mpd"
          drmLicenseUrl="https://real-madrid-drm-url"
          nsurl={
            "intent://tglmp04.akamaized.net/out/v1/400fc0702dee453bb33ebcc29466e58a/manifest.mpd|drmScheme=clearkey&drmLicense=91b9592c819246c68b3b08a1fe08ba22:fa0d80dfd865b34077bae44cd4a0c5e6#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=LIVETV;end"
          }
        />


        <Card
          title="Real Madrid TV"
          loron={"Loron-Loron"}
          oras={
            "Live Direta preparasaun no jogu tuan Real Madrid no jogu pramusim sira"
          }
          tumbnail={
            "https://www.sportyou.es/blog/wp-content/uploads/2015/09/realmadridtv.jpg"
          }
          videoSrc="https://rmtv.akamaized.net/hls/live/2043154/rmtv-en-web/master.m3u8"
          drmLicenseUrl="https://real-madrid-drm-url"
          nsurl={
            "intent://rmtv.akamaized.net/hls/live/2043154/rmtv-en-web/master.m3u8|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36 Vinebre#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=LIVETV;end"
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
