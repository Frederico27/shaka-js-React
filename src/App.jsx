import React from 'react';
import './App.css';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="text-center py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-4">
        Jogu Futebol ne'ebe Live iha <span className="text-blue-400">Ailok TV ⚽</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Bele Asiste husi <span className="text-yellow-400 font-semibold">Laptop</span>, 
          <span className="text-green-400 font-semibold"> Telefone</span> (uza Chrome), 
          <span className="text-blue-400 font-semibold"> Televizaun Android</span> nst!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-3">
        
        {/* Card goes Here */}

        {/* <Card 
            title="Chelsea vs Tottenham" 
            oras={"Kick off 04:00 OTL | Komentariu Inglês"}
            tumbnail={"https://imgsrv2.voi.id/cu-esTjgIZ7OrjtPLaPldEPPZ8DS_WYmc5iAG66x1x8/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy80NzMwNjIvMjAyNTA0MDIxMDQ2LW1haW4uY3JvcHBlZF8xNzQzNTY1NTkyLmpwZWc.jpg"}
            videoSrc="https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
            title="Chelsea vs Tottenham" 
            oras={"Kick off 04:00 OTL | Komentariu Espanha"}
            tumbnail={"https://imgsrv2.voi.id/cu-esTjgIZ7OrjtPLaPldEPPZ8DS_WYmc5iAG66x1x8/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy80NzMwNjIvMjAyNTA0MDIxMDQ2LW1haW4uY3JvcHBlZF8xNzQzNTY1NTkyLmpwZWc.jpg"}
            videoSrc="https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />


        <Card 
              title="Live Liga Inglesa" 
              oras={"Kanal Foka ba Jogu Liga Inglesa Sira"}
              tumbnail={"https://yt3.googleusercontent.com/zhPMOpUIlmMa_xAgrHYGYrkCSWS-3tE0yPPKVUzh1iiYOF1QDqGtg3ZIbWXjkNmN3l3WPqziRHE=s900-c-k-c0x00ffffff-no-rj"}
              videoSrc="https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd" 
              drmLicenseUrl="https://real-madrid-drm-url"
        /> */}

        <Card 
              title="Live Liga Espanha" 
              oras={"Kanal Foka ba Jogu Liga Espanha Sira"}
              tumbnail={"https://logowik.com/content/uploads/images/laliga-2023-2024-new3252.logowik.com.webp"}
              videoSrc="https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/6fbnr3ei4b/out/v1/57d2ae96a4cc4230881cd801b389edf6/cenc.mpd" 
              drmLicenseUrl="https://real-madrid-drm-url"
        />
{/* 
        <Card 
              title="Live Liga Alemanha" 
              oras={"Kanal Foka ba Jogu Liga Alemanha Sira"}
              tumbnail={"https://www.idman.biz/media/2024/07/16/1920x1280/bundesliga.webp?v=1721130454"}
              videoSrc="https://aivottlinear-a.akamaihd.net/OTTE/DUB/live/dash/enc/k2dcwnlpgr/out/v1/0502dc73a24b43a79c042bf2d14f6b84/cenc.mpd" 
              drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
              title="Live Liga Italia" 
              oras={"Kanal Foka ba Jogu Liga Italia Sira"}
              tumbnail={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Serie_A_logo_2022.svg/1200px-Serie_A_logo_2022.svg.png"}
              videoSrc="https://uselector.cdn.intigral-ott.net/ADSP1/ADSP1.isml/manifest.mpd" 
              drmLicenseUrl="https://real-madrid-drm-url"
        /> */}

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
