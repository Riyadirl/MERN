//4  CREATE SERVER BASIC
// request response server test
/*
let http=require('http');
let server= http.createServer(function (req, res){
    res.end("Hello node js server test");
});

server.listen(5050);
console.log("server run done"); */


// 5  get request response model
//6 Request Response Model Works in node js
let http = require("http");
let server = http.createServer(function (req, res) {
  if (req.url === "/") {
    req.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>This is home page</h1>");
    res.end();
  } else if (req.url === "/about") {
    req.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>This is about page</h1>");
    res.end();
  } else if (req.url === "contact") {
    req.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>This is content page</h1>");
    res.end();
  }
});

server.listen(5050);
console.log("server run done");


