'use strict';
const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    // console.log(req.method);
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
  }
});
server.listen(port);
