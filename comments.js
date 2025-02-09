// Create web server
// Create a web server that listens for incoming requests on port 3000. When a request is received, it will respond with the file comments.json. If the file does not exist, it will respond with a 404 status code.

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
  fs.readFile(path.join(__dirname, 'comments.json'), function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    }
  });
}).listen(3000);