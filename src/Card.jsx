import React from "react";
import { useNavigate } from "react-router-dom";

function Card({
  title,
  videoSrc,
  drmLicenseUrl,
  nsurl,
  subtitle,
  oras,
  loron,
  tumbnail,
  drmScheme,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/player", {
      state: {
        videoSrc,
        drmLicenseUrl,
        nsurl,
        title,
        subtitle,
        drmScheme,
      },
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className="group relative w-full max-w-xs cursor-pointer rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-blue-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:max-w-sm"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-full overflow-hidden rounded-xl bg-slate-800/70">
            <img
              src={tumbnail}
              alt={title || "Channel thumbnail"}
              className="h-36 w-full object-contain p-3 transition duration-300 group-hover:scale-105"
            />
          </div>
          {subtitle && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
              {subtitle}
            </span>
          )}
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            {title}
          </h2>
          {loron && (
            <p className="text-sm font-medium text-slate-200">{loron}</p>
          )}
          <p className="text-sm font-medium text-slate-300">{oras}</p>
          <p className="text-sm font-semibold text-blue-200">
            Klik hodi asiste →
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
