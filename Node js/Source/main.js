

let http=require('http');
let server= http.createServer(function (req, res){
    res.end("Hello");
});

server.listen(5050);
console.log("server run done");