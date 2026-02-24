export default function handler(req, res) {
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

  fetch(targetUrl, {
    headers: {
      'X-Forwarded-For': '13.106.174.0',
    }
  })
    .then(response => {
      res.status(response.status);
      response.body.pipe(res);
    })
    .catch(err => {
      console.error('Proxy error:', err);
      res.status(500).send('Proxy error.');
    });
}
