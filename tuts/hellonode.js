// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

server.listen(process.env.C9_PORT, "0.0.0.0");

// Put a friendly message on the terminal
console.log("Server running at http://0.0.0.0:"+process.env.C9_PORT+"/");