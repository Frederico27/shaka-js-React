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
  const customReferer = req.query.referer || req.query.referrer;
  const customOrigin = req.query.origin;

  if (!targetUrl) {
    return res.status(400).send('Missing `url` query parameter.');
  }

  const upstreamHeaders = {
    'X-Forwarded-For': '13.106.174.0',
  };

  if (customReferer) {
    upstreamHeaders.Referer = customReferer;
  }

  if (customOrigin) {
    upstreamHeaders.Origin = customOrigin;
  }

  request({
    url: targetUrl,
    headers: upstreamHeaders,
  }).on('error', (err) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error.');
  }).pipe(res);
});

app.listen(PORT, () => {
  console.log(`✅ CORS Proxy running at http://localhost:${PORT}`);
});
