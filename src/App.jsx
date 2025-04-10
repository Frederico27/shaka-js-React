import React from 'react';
import './App.css';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="text-center py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <h1 className="text-4xl sm:text-5xl mt-7 font-extrabold tracking-wide mb-4">
        Jogu Futebol ne'ebe Live iha <span className="text-blue-400">Ailok TV ⚽</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Bele Asiste husi <span className="text-yellow-400 font-semibold">Laptop</span>, 
          <span className="text-green-400 font-semibold"> Telefone</span> (uza Chrome), 
          <span className="text-blue-400 font-semibold"> Televizaun Android</span> nst!
        </p>
        {/* <br></br>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-3">Ba Telfone sira agora presija utiliza Network Stream Video Player (NSPlayer) hodi suporta link barak</p>
        <a href='https://play.google.com/store/apps/details?id=com.genuine.leone' className="text-sm text-gray-400 mt-2">Klik hodi download NSPlayer husi Play Store</a> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-3">
        
        {/* Card goes Here */}

        <Card 
            title="Lyon vs Manchester United" 
            loron={'11 Abril 2025'}
            oras={"Kick off 04:00 OTL | Komentariu Ingles"}
            tumbnail={"https://s.yimg.com/ny/api/res/1.2/DPX4WzBY7_382yM4uB0Rsg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNg--/https://media.zenfs.com/en/playmakerstats_articles_264/a0f42d84bf91480192b4fb0c784f30f8"}
            videoSrc="https://aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
            // nsurl={"intent://tataplay.slivcdn.com/hls/live/2020434/TEN2HD/master.m3u8|User-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/605.1.15/Clipbox+/2.2.8& Vinebre#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=LIVETV;end"}
        />

  
        <Card 
            title="Rangers vs Atletico Bilbao" 
            loron={'11 Abril 2025'}
            oras={"Kick off 04:00 OTL | Komentariu Ingles"}
            tumbnail={"https://s.yimg.com/ny/api/res/1.2/mHAhTACl0xPhKKlTiU52Dg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNg--/https://media.zenfs.com/en/playmakerstats_articles_264/bf2cda336f904205f692ffbef742ae87"}
            videoSrc="https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
            // nsurl={"intent://tataplay.slivcdn.com//hls/live/2011747/TEN1HD/master.m3u8|User-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/605.1.15/Clipbox+/2.2.8& Vinebre#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=LIVETV;end"}
        />


        <Card 
            title="Tottenham vs Frankfurt" 
            loron={'11 Abril 2025'}
            oras={"Kick off 04:00 OTL | Komentariu Alemao"}
            tumbnail={"https://s.yimg.com/ny/api/res/1.2/VUM9FO6GeDQqw22XqXSzQw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNjtjZj13ZWJw/https://media.zenfs.com/en/playmakerstats_articles_264/a9a6b02606952d4d3eb7de6dc909fcd3"}
            videoSrc="https://aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
            // nsurl={"intent://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd%7CUser-Agent=Mozilla/5.0&drmScheme=clearkey&drmLicense=ae26845bd33038a9c0774a0981007294:63ac662dde310cfb4cc6f9b43b34196d#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=livetv;end"}

        />


        <Card 
              title="Live Liga Inglesa" 
              oras={"Kanal Foka ba Jogu sira seluk Liga Inglesa nian"}
              tumbnail={"https://yt3.googleusercontent.com/zhPMOpUIlmMa_xAgrHYGYrkCSWS-3tE0yPPKVUzh1iiYOF1QDqGtg3ZIbWXjkNmN3l3WPqziRHE=s900-c-k-c0x00ffffff-no-rj"}
              videoSrc="https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd" 
              drmLicenseUrl="https://real-madrid-drm-url"
        />


        <Card 
              title="Live Liga Espanha" 
              oras={"Kanal Foka ba Jogu sira seluk Liga Espanha nian"}
              tumbnail={"https://logowik.com/content/uploads/images/laliga-2023-2024-new3252.logowik.com.webp"}
              videoSrc="https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/6fbnr3ei4b/out/v1/57d2ae96a4cc4230881cd801b389edf6/cenc.mpd" 
              drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
              title="Live Liga Alemanha" 
              oras={"Kanal Foka ba Jogu sira seluk Liga Alemanha nian"}
              tumbnail={"https://www.idman.biz/media/2024/07/16/1920x1280/bundesliga.webp?v=1721130454"}
              videoSrc="https://aivottlinear-a.akamaihd.net/OTTE/DUB/live/dash/enc/k2dcwnlpgr/out/v1/0502dc73a24b43a79c042bf2d14f6b84/cenc.mpd" 
              drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
              title="Live Liga Italia" 
              oras={"Kanal Foka ba Jogu sira seluk Liga Italia nian"}
              tumbnail={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Serie_A_logo_2022.svg/1200px-Serie_A_logo_2022.svg.png"}
              videoSrc="https://uselector.cdn.intigral-ott.net/ADSP1/ADSP1.isml/manifest.mpd" 
              drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card
          title="Liga Champions Epoka 24/25"
          oras={"Komesa Semana Oin"}
          tumbnail={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17waUfO3dHURK40tmMJsQGRE6SXdCEZ-B3Q&s"}
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
