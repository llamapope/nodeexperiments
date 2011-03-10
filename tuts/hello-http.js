// Load the config/settings files
var SERVER = require('../config/server.js').settings;

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello HTTP!\n");
});

server.listen(SERVER.port, SERVER.ip);

// Put a friendly message on the terminal
console.log("Server running at http://"+SERVER.ip+":"+SERVER.port+"/");