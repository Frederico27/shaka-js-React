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

        <Card 
            title="Everton vs Arsenal" 
            loron={'5 Abril 2025'}
            oras={"Kick off 20:30 OTL | Komentariu Espanha"}
            tumbnail={"https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/f1979baa91d312835996ddd9f660bfb6a850f5c903c34414429884fdac6f010c.jpg"}
            videoSrc="https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
            title="Real Madrid vs Valencia" 
            loron={'5 Abril 2025'}
            oras={"Kick off 23:15 OTL | Komentariu Ingles"}
            tumbnail={"https://mrfixitstips.co.uk/app/uploads/2023/11/MRF2023_Real-Madrid-v-Valencia-1038x584.jpg"}
            videoSrc="https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/6fbnr3ei4b/out/v1/57d2ae96a4cc4230881cd801b389edf6/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
            title="Real Madrid vs Valencia" 
            loron={'5 Abril 2025'}
            oras={"Kick off 23:15 OTL | Komentariu Espanha"}
            tumbnail={"https://mrfixitstips.co.uk/app/uploads/2023/11/MRF2023_Real-Madrid-v-Valencia-1038x584.jpg"}
            videoSrc="https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/wjgklbtvhh/out/v1/659736a1e24c40e4865a80ffd75e7de7/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />


        <Card 
            title="Barcelona vs Real Betis" 
            loron={'6 Abril 2025'}
            oras={"Kick off 04:00 OTL | Komentariu Inglês"}
            tumbnail={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDN8zwTeojGP8-IBNpimGR_SI2BTjoVBywQ&s"}
            videoSrc="https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/6fbnr3ei4b/out/v1/57d2ae96a4cc4230881cd801b389edf6/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />


        <Card 
            title="Barcelona vs Real Betis" 
            loron={'6 Abril 2025'}
            oras={"Kick off 04:00 OTL | Komentariu Espanha"}
            tumbnail={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDN8zwTeojGP8-IBNpimGR_SI2BTjoVBywQ&s"}
            videoSrc="https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/wjgklbtvhh/out/v1/659736a1e24c40e4865a80ffd75e7de7/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
              title="Parma vs Inter Milan"
              loron={'6 Abril 2025'}
              oras={"Kick off 01:00 OTL | Komentariu Inglês"}
              tumbnail={"https://assets.khelnow.com/news/uploads/2024/12/1053-Inter-vs-Parma-copy.jpg"}
              videoSrc="https://uselector.cdn.intigral-ott.net/ADSP1/ADSP1.isml/manifest.mpd" 
              drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
              title="AC Milan vs Fiorentina"
              loron={'6 Abril 2025'}
              oras={"Kick off 03:45 OTL | Komentariu Inglês"}
              tumbnail={"https://image.discovery.indazn.com/ca/v2/ca/image?id=9nyuodec9h483zpffbdosuelt_image-header_pRow_1743675703000&quality=50"}
              videoSrc="https://uselector.cdn.intigral-ott.net/ADSP1/ADSP1.isml/manifest.mpd" 
              drmLicenseUrl="https://real-madrid-drm-url"
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
