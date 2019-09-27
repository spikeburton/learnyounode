'use strict';
const http = require('http');

http
  .get(process.argv[2], res => {
    res.setEncoding('utf8');

    let result = '';
    res.on('data', data => {
      result += data;
    });
    res.on('error', console.error);
    res.on('end', () => {
      console.log(result.length);
      console.log(result);
    });
  })
  .on('error', console.error);
