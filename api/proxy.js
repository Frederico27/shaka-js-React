export default async function handler(req, res) {
  const targetUrl = req.query.url;
  
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
    const response = await fetch(targetUrl, {
      headers: {
        'X-Forwarded-For': '13.106.174.0',
      }
    });

    res.status(response.status);
    
    response.headers.forEach((value, key) => {
      if (key !== 'content-encoding') {
        res.setHeader(key, value);
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy error.' });
  }
}
