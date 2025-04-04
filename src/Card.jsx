import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({title, videoSrc, drmLicenseUrl, subtitle, oras, loron, tumbnail}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/player', {
      state: {
        videoSrc,
        drmLicenseUrl,
        title,
        subtitle,
      }
    });
  };

  return (
    <div className="flex items-center justify-center w-full">
  <div 
    onClick={handleClick}
    className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs sm:max-w-sm transform transition-transform duration-300 hover:scale-105 cursor-pointer"
  >
    <div className="flex flex-col items-center">
      <img 
        src={tumbnail}
        alt="Logo" 
        className="w-full h-auto max-h-40 object-contain mb-4"
      />
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>


      {loron && (
        <h1 className="text-sm font-semibold text-gray-800 mb-2">
      {loron}
      </h1>
      )}

      <h1 className="text-sm text-center font-semibold text-gray-800 mb-2">
        {oras}
      </h1>
      <p className="text-gray-600 text-center text-sm sm:text-base">
        Klik hodi asiste
      </p>
    </div>
  </div>
</div>

  );
}

export default Card;
