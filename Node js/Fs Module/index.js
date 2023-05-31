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

let fs = require("fs");
let http = require("http");

let server = http.createServer(function (req, res) {
  if ((req.url = "/")) {
    fs.writeFile("demo.txt", "hello this is a demo", function (error) {
      if (error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.writeHead("File write failed");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.writeHead("File write succeeded");
        res.end();
      }
    });
  }
});

server.listen(3000);
console.log("server listening successfully");



//17 fs File Write Sync

let fs = require("fs");
let http = require("http");

if ((req.url = "/")) {
  let error = fs.writeFileSync(
    "demoSync.txt",
    "hello this is a file synchronously"
  );

  if (error) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.writeHead("File write failed");
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.writeHead("File write succeeded");
    res.end();
  }
}

server.listen(4040);
console.log("server listening successfully");
*/


//18 fs File Rename Async
