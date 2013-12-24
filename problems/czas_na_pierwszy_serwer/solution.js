"use strict";

var net = require("net"),
    os = require("os");

function pad(i) {
  return (i < 10 ? "0" : "") + i;
}

function now () {
  var d = new Date();

  return d.getFullYear() + "-" +
         pad(d.getMonth() + 1) + "-" +
         pad(d.getDate()) + " " +
         pad(d.getHours()) + ":" +
         pad(d.getMinutes());
}

var server = net.createServer(function (socket) {
  socket.end(now() + os.EOL);
});

server.listen(parseInt(process.argv[2], 10));