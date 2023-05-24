//14 fs ready file

let fs = require("fs");
let http = require("http");

let server = http.createServer(function (req, res) {});

server.listen(4040);
console.log("server listening succesfully");
