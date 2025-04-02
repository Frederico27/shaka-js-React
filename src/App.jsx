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
        <Card
          title="Atletico Madrid vs Barcelona"
          oras={"Kick off 04:30 OTL"}
          tumbnail={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DnrTmv8U0tbue2HRPaHuLlmOdQ_fcNAsfg&s"}
          videoSrc="https://ssc-extra-1-enc.edgenextcdn.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd" 
          drmLicenseUrl="https://real-madrid-drm-url"
          subtitle={"Hala Madrid! Hein ami iha final 🤍."}
        />

        <Card 
          title="Inter vs AC Milan" 
          oras={"Kick off 04:00 OTL"}
          tumbnail={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzivvj0RNZtnGHNbvDYQzb_risQgz3ZzFGKQ&s"}
          videoSrc="https://aivottlinear-a.akamaihd.net/OTTE/DUB/live/dash/enc/k2dcwnlpgr/out/v1/0502dc73a24b43a79c042bf2d14f6b84/cenc.mpd" 
          drmLicenseUrl="https://real-madrid-drm-url"
        />

        <Card 
          title="Manchester City vs Leicester" 
          oras={"Kick off 04:30 OTL"}
          tumbnail={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPr9BbZvr_O3G7K_lrxya1EiYd8D07SEN3w&s"}
          videoSrc="https://fsly.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(usa-east)/master.mpd" 
          drmLicenseUrl="https://sweet-night-1d1d.worst.workers.dev/play?id=9182&type=drm"
        />

        <Card 
          title="Liverpool vs Everton" 
          oras={"Kick off 04:00 OTL"}
          tumbnail={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxPT-X3GXVbD9VQWbCKFdTvKItCnI5_HeaQ&s"}
          videoSrc="https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd" 
          drmLicenseUrl="https://real-madrid-drm-url"
        />

      </div>

      <Footer />
    </>
  );
}

export default App;
