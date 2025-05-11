import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const BOT_TOKEN = "YOUR TOKEN";
  const CHAT_ID = 'YOUR CHAT ID';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `📝 *New Feedback* \n👤 *Name:* ${name}\n💬 *Message:* ${message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        setStatus('✅ Mensajen manda ho susessu Obrigado Barak!');
        setName('');
        setMessage('');
      } else {
        setStatus('❌ Falla Mandad mensajen.');
      }
    } catch (error) {
      setStatus('⚠️ Akontese Error ho Feedback.');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
     

      <h2 className="text-xl font-semibold mb-4 text-center">
        Manda Sujestaun no Sentimentu Ita-bo'ot nian mai Ami konaba aplikasaun
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-md">
        <input
          type="text"
          placeholder="Naran"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded-md"
        />
        <textarea
          placeholder="Sujestaun"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded-md"
          rows={4}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Manda
          </button>
        </div>

         {/* Back Button */}
         <div className="flex justify-center">
         <button
        onClick={() => navigate(-1)}
        className="bg-yellow-700 px-4 py-1 mt-3 rounded-md text-white hover:text-gray-300"
      >
        Fila ba Menu Prinsipal
      </button>

         </div>
     
      </form>
      {status && <p className="mt-3 text-sm">{status}</p>}
    </div>
  );
};

export default FeedbackForm;