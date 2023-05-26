//14 fs ready file
//asynchronous read file
/*
let fs = require("fs");
let http = require("http");

let server = http.createServer(function (req, res) {
  if ((req.url = "/")) {
    //asynchronous
    fs.readFile("home.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.writeHead(data);
      res.end();
    });
  }
});

server.listen(4040);
console.log("server listening successfully");
*/

//15   sync read
let fs = require("fs");
let http = require("http");

let server = http.createServer(function (req, res) {
  if ((req.url = "/")) {
    let myData = fs.readFileSync("home.html", function () {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.writeHead(myData);
      res.end();
    });
  }
});

server.listen(5050);
console.log("server listening successfully");

// 16   async write
