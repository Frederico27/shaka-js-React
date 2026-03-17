import { Readable } from 'node:stream';

export default async function handler(req, res) {
  const targetUrl = req.query.url;
  const customReferer = req.query.referer || req.query.referrer;
  const customOrigin = req.query.origin;
  
  if (!targetUrl) {
    return res.status(400).send('Missing `url` query parameter.');
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const upstreamHeaders = {
      'X-Forwarded-For': '13.106.174.0',
    };

    if (customReferer) {
      upstreamHeaders.Referer = customReferer;
    }

    if (customOrigin) {
      upstreamHeaders.Origin = customOrigin;
    }

    const response = await fetch(targetUrl, {
      headers: upstreamHeaders,
    });

    res.status(response.status);

    response.headers.forEach((value, key) => {
      const lowerKey = key.toLowerCase();
      if (!['connection', 'transfer-encoding', 'keep-alive'].includes(lowerKey)) {
        res.setHeader(key, value);
      }
    });

    if (!response.body) {
      return res.end();
    }

    Readable.fromWeb(response.body).pipe(res);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy error.' });
  }
}
