import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MainPlayer from './MainPlayer';
import FeedbackForm from './Feedback';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/player" element={<MainPlayer/>} />
        <Route path="/feedback" element={<FeedbackForm/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);