// Load the config/settings files
var SERVER = require('../config/server.js').settings;

// Load the node-router library by creationix
var server = require('../lib/node-router.js').getServer();

// Configure our HTTP server to respond with Hello World the root request
server.get("/", function (request, response) {
  response.simpleText(200, "Hello Router!\nGo anywhere else on this site and get a 'Not Found' Error.");
});

// Listen on port process.env.C9_PORT (assigned by cloud 9) on 0.0.0.0 (as required by cloud 9)
server.listen(SERVER.port, SERVER.ip);