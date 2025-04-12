import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import Footer from './Footer';

function App() {
  // You can replace this URL with your actual background image
  const backgroundImageUrl = "https://images2.minutemediacdn.com/image/upload/c_crop,w_3000,h_1687,x_0,y_93/c_fill,w_912,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01jh8mj8yd87wwrg97ag.jpg";
  
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen text-white p-4 relative"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image with blur effect */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          transform: 'scale(1.1)', // Slightly scale up to prevent blur edges from showing
          zIndex: -1,
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(17, 24, 39, 0.7)', // bg-gray-900 with opacity
          zIndex: -1,
        }}
      />

      {/* Content */}
      <div className="text-center max-w-md z-10">
        <h1 className="text-3xl font-bold mb-6">Presija Update Aplikasaun</h1>
        <p className="text-lg mb-6">
          Ita boot presija update Ailok TV ba versaun foun liu hodi kontinua uza aplikasaun. Aplikasaun Ailok TV foun suporta
          link barak liu hodi favorese streaming neebe kamaan hodi asiste jogu futebol.
        </p>
        <a
          href="https://sfile.mobi/8XjYsTr1oQD"
          onClick={(e) => {
            e.preventDefault(); // prevent the default anchor behavior
            window.open("https://sfile.mobi/8XjYsTr1oQD", "_blank");
          }}
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-600 transition-colors"
        >
          Download Ailok TV versaun foun agora
        </a>
        <p className="text-lg mb-6 mt-4">
          Ailok TV foun sei uza NSPlayer hodi play link jogu sira. Klink link iha okos hodi download NSPlayer liu hosi Playstore ou bele direta
          ba iha Playstore hodi download Network Stream Player (NSPlayer) hodi bele play link jogu sira.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.genuine.leone"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-600 transition-colors"
        >
          Download NSPlayer Agora
        </a>
      </div>
    </div>
  );
}

export default App;