'use strict';
const net = require('net');
const port = process.argv[2] || 8000;

const server = net.createServer(function(socket) {
  const d = new Date();

  const year = d.getFullYear();
  let month = d.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = d.getDate();
  day = day < 10 ? `0${day}` : day;
  let hours = d.getHours();
  hours = hours < 10 ? `0${hours}` : hours;
  let mins = d.getMinutes();
  mins = mins < 10 ? `0${mins}` : mins;

  socket.end(`${year}-${month}-${day} ${hours}:${mins}\n`);
});
server.listen(port);
