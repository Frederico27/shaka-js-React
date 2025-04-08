import express from 'express';
import request from 'request';
import cors from 'cors';

const app = express();
const PORT = 3000;

// CORS setup
app.use(cors());

// Fix favicon.ico error from browser
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Main proxy endpoint
app.get('/proxy', (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send('Missing `url` query parameter.');
  }

  request({
    url: targetUrl,
    headers: {
      'X-Forwarded-For': '13.106.174.0',
    }
  }).on('error', (err) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error.');
  }).pipe(res);
});

app.listen(PORT, () => {
  console.log(`✅ CORS Proxy running at http://localhost:${PORT}`);
});
