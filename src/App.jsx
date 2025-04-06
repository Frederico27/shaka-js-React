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
            title="Fulham vs Liverpool" 
            loron={'6 Abril 2025'}
            oras={"Kick off 22:00 OTL | Komentariu Espanha"}
            tumbnail={"https://static.standard.co.uk/2022/05/05/11/PLFulhamLiverpool2223v1-1.jpg?width=1200&auto=webp&quality=75"}
            videoSrc="https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
            title="Brentford vs Chelsea" 
            loron={'6 Abril 2025'}
            oras={"Kick off 22:00 OTL | Komentariu Ingles"}
            tumbnail={"https://static.standard.co.uk/2022/05/05/14/PLBrentfordChelsea2223v1.jpg?width=1200&auto=webp&quality=75"}
            videoSrc="https://cfrt.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(usa-west)/master.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />


      <Card 
            title="Brentford vs Chelsea" 
            loron={'6 Abril 2025'}
            oras={"Kick off 22:00 OTL | Komentariu Espanha"}
            tumbnail={"https://static.standard.co.uk/2022/05/05/14/PLBrentfordChelsea2223v1.jpg?width=1200&auto=webp&quality=75"}
            videoSrc="https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/xnk4m9bnxt/out/v1/4ced7b7329a54652b9bb0521ed38bd4d/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />


        <Card 
            title="Sevilla vs Atletico de Madrid" 
            loron={'6 Abril 2025'}
            oras={"Kick off 23:15 OTL | Komentariu Ingles"}
            tumbnail={"https://mrfixitstips.co.uk/app/uploads/2025/04/Sevilla-v-Atletico-Madrid-1038x584.jpg"}
            videoSrc="https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/6fbnr3ei4b/out/v1/57d2ae96a4cc4230881cd801b389edf6/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
            title="Sevilla vs Atletico de Madrid" 
            loron={'6 Abril 2025'}
            oras={"Kick off 23:15 OTL | Komentariu Espanha"}
            tumbnail={"https://mrfixitstips.co.uk/app/uploads/2025/04/Sevilla-v-Atletico-Madrid-1038x584.jpg"}
            videoSrc="https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/wjgklbtvhh/out/v1/659736a1e24c40e4865a80ffd75e7de7/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />


      <Card 
            title="Manchester United vs Manchester City" 
            loron={'6 Abril 2025'}
            oras={"Kick off 22:00 OTL | Komentariu Ingles"}
            tumbnail={"https://static.standard.co.uk/2023/08/10/13/PLManUtdManCity23v1.jpg?width=1200&auto=webp&quality=75"}
            videoSrc="https://cfrt.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(usa-west)/master.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />


      <Card 
            title="Manchester United vs Manchester City" 
            loron={'6 Abril 2025'}
            oras={"Kick off 22:00 OTL | Komentariu Espanha"}
            tumbnail={"https://static.standard.co.uk/2023/08/10/13/PLManUtdManCity23v1.jpg?width=1200&auto=webp&quality=75"}
            videoSrc="https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
            title="Manchester United vs Manchester City" 
            loron={'6 Abril 2025'}
            oras={"Kick off 22:00 OTL | Komentariu Arabia"}
            tumbnail={"https://static.standard.co.uk/2023/08/10/13/PLManUtdManCity23v1.jpg?width=1200&auto=webp&quality=75"}
            videoSrc="https://wo.cma.footballii.ir/hls2/b1.m3u8" 
            drmLicenseUrl="https://real-madrid-drm-url"
        />


        <Card 
              title="Roma vs Juventus"
              loron={'6 Abril 2025'}
              oras={"Kick off 01:00 OTL | Komentariu Inglês"}
              tumbnail={"https://mrfixitstips.co.uk/app/uploads/2023/02/MRF2023_RomavJuventus-1038x584.jpg"}
              videoSrc="https://uselector.cdn.intigral-ott.net/ADSP1/ADSP1.isml/manifest.mpd" 
              drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
              title="FC Porto vs Benfica"
              loron={'7 Abril 2025'}
              oras={"Kick off 04:30 OTL | Komentariu Arabia"}
              tumbnail={"https://mrfixitstips.co.uk/app/uploads/2021/12/MRF2021_FCPortovBenfica-1038x519.jpg"}
              videoSrc="https://ssc-extra-1-enc.edgenextcdn.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd" 
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
