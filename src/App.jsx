import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const convertToHttps = (url) => {
    if (!url) return url;
    return url.replace(/^http:\/\//i, 'https://');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = window.location.hostname === 'localhost' 
          ? 'http://localhost:3000/proxy'
          : '/api/proxy';
        const res = await fetch(
          apiUrl + "?url=" +
            encodeURIComponent("https://ailok-tv-restful-api.vercel.app/api/eventsWithRelations")
        );
        const data = await res.json();
        setEvents(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString("pt-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-3">Loading...</p>
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

      <div className="min-h-screen bg-slate-950 text-white">
        <header className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500 blur-[120px]" />
            <div className="absolute bottom-0 right-8 h-56 w-56 rounded-full bg-purple-500 blur-[120px]" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 text-center sm:py-16">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
              Live Matches & Highlights
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Jogu Futebol ne&apos;ebe Live iha{" "}
              <span className="text-blue-400">Ailok TV ⚽</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl">
              Bele Asiste husi{" "}
              <span className="font-semibold text-yellow-300">Laptop</span>,
              <span className="font-semibold text-green-300"> Telefone</span>{" "}
              (uza Chrome),
              <span className="font-semibold text-blue-300">
                {" "}
                Televizaun Android
              </span>{" "}
              nst!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                ✅ Streaming Fasil
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                📺 Suporta Device hotu
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                ⚡ Loading ne'ebe Lais
              </span>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-4 pb-6 pt-8">
          <div className="mb-6 flex flex-col gap-2 text-center sm:mb-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Kanal & Jogu sira
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Hili kanal, haree oras, no klik atu haree live.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {events.map((event) => {
              if (!event.channel) return null;
              
              return (
                <Card
                  key={event.id_event}
                  title={event.title}
                  loron={formatDate(event.time_start)}
                  oras={formatTime(event.time_start)}
                  tumbnail={event.image_url}
                  videoSrc={convertToHttps(event.channel.url)}
                  drmLicenseUrl={convertToHttps(event.channel.license)}
                  drmScheme={event.channel.scheme}
                />
              );
            })}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;
