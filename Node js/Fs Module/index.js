//14 fs ready file

let fs = require("fs");
let http = require("http");

let server = http.createServer(function (req, res) {
  if ((req.url = "/")) {
    fs.readFile("home.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.writeHead(data);
      res.end();
    });
  }
});

server.listen(4040);
console.log("server listening successfully");
