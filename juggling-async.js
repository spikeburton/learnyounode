'use strict';
const http = require('http');

let count = 0;
const q = [];
for (let i = 0; i < 3; i++) {
  q.push({
    url: process.argv[i + 2],
    data: ''
  });
}

q.forEach(obj =>
  http.get(obj.url, res => {
    res.setEncoding('utf8');
    res.on('data', data => (obj.data += data));
    res.on('error', console.error);
    res.on('end', () => {
      count++;

      if (count === 3) {
        for (let i = 0; i < q.length; i++) {
          console.log(q[i].data);
        }
      }
    });
  })
);
