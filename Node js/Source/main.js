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
/*
let http = require("http");
let server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>This is home page</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>This is about page</h1>");
    res.end();
  } else if (req.url === "contact") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>This is content page</h1>");
    res.end();
  }
});

server.listen(5050);
console.log("server run done");
*/
//7 Understanding Http Client
//axios, fetch,jquery,
//for testing >> postman

//8 Understanding Package Json file
//npm init --y

//9 URL Module
/*
let http = require("http");
let URL = require("url");

let server = http.createServer(function (req, res) {
  let myURL = "http://rabbil.com/blog.html?year=2015&month=june";

  let myURLObj = URL.parse(myURL,true);

  let myHostName= myURLObj.host;
  let myPathName = myURLObj.pathname;
  let mySearchName = myURLObj.search;

      res.writeHead(200, {'content-type': 'text/html'})
      res.write(myHostName);  //rabbil.com
      res.write(myPathName);  //blog.html
      res.write(mySearchName);  //?year=2015&month=june

      res.end();

});

server.listen(5050);
console.log("server run done");
*/

//10 G FS Module  file system
//asy>> multitask
//sy >> no multi

//11 Understanding Synchronous Asynchronous

//12 ,13Understanding Synchronous Asynchronous
//13

//14  14 fs ready file ready html page
