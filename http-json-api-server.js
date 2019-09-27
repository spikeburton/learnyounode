'use strict';
const http = require('http');

const port = process.argv[2];
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (req.method !== 'GET') {
    return res.end(JSON.stringify({ error: 'ONLY ACCEPTING GET REQUESTS' }));
  }

  const url = new URL(req.url, `http://localhost:${port}`);
  if (url.pathname === '/api/parsetime') {
    const d = new Date(url.searchParams.get('iso'));
    const payload = {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };

    return res.end(JSON.stringify(payload));
  }
  if (url.pathname === '/api/unixtime') {
    const d = new Date(url.searchParams.get('iso'));
    const payload = {
      unixtime: d.getTime()
    };

    return res.end(JSON.stringify(payload));
  }
});
server.listen(port);
