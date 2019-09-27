'use strict';
const fs = require('fs');
const http = require('http');

const port = process.argv[2];
const file = fs.createReadStream(process.argv[3]);

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  file.pipe(res);
});
server.listen(port);
