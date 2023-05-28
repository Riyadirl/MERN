//1 intro
// server side web framework
//developing servre side rest API

//2 Express Application
/*
let express = require("express");

app = express();


app.get("/", function (req, res) {
  res.send("Hello express!");
});

app.listen(8000, function () {
  console.log("Server Run Success");
});

*/

//3 express js routing
//using postman
/*
let express = require("express");

app = express();

app.get("/", function (req, res) {
  res.send("home page");
});

app.post("/about", function (req, res) // /about-> URI
{  
  res.send("about page!");
});

app.put("/terms", function (req, res) {
  res.send("terms!");
});

app.delete("/contact", function (req, res) {
  res.send("contact us");
});

app.listen(8080, function () {
  console.log("Server Run Success");
});

*/

//4 Four Topic We Need To Focus
/*
1>request
2>response
3>middleware
4>database operation


//5
1>response
        Body
        header
        status
        cookies
*/

//6 Simple String Response
/*
let express = require("express");

app = express();

//simple string response
//res.send -- response body
//res.end-- response ending point
app.get("/one", function (req, res) {
  res.send("this is a simple string one");
});

app.post("/two", function (req, res) {
  res.send("this is a simple string two");
});

app.listen(8000, function () {
  console.log("Server Run Success");
});

//7 Response Status Code

let express = require("express");

app = express();

//simple string response
//res.send -- response body
//res.end-- response ending point
app.get("/one", function (req, res) {
  res.end("this is a simple string one");
});

app.post("/two", function (req, res) {
  res.end("this is a simple string two");
});

app.get("/three", function (req, res) {
  res.status(201).end("igudfsg");
});

app.listen(8000, function () {
  console.log("Server Run Success");
});



//8 JSON Response

let express = require("express");

app = express();

//simple string response
//res.send -- response body
//res.end-- response ending point
app.get("/one", function (req, res) {
  res.end("this is a simple string one");
});

app.post("/two", function (req, res) {
  res.end("this is a simple string two");
});
//response status code
app.get("/three", function (req, res) {
  res.status(201).end("igudfsg");
});
//json response status code
app.get("/four", function (req, res) {
  let myJSONArray = [
    {
      name: "Riyad",
      city: "comiia",
      uni: "uiu",
    },
    {
      name: "Chintu",
      city: "dhaka",
      uni: "qw",
    },
  ];
  res.json(myJSONArray);
});

app.listen(5000, function () {
  console.log("Server Run Success");
});


//9 Response Download

let express = require("express");

app = express();

app.get("/one", function (req, res) {
  res.end("this is a simple string one");
});

app.post("/two", function (req, res) {
  res.end("this is a simple string two");
});

app.get("/three", function (req, res) {
  res.status(201).end("igudfsg");
});

app.get("/four", function (req, res) {
  let myJSONArray = [
    {
      name: "Riyad",
      city: "comiia",
      uni: "uiu",
    },
    {
      name: "Chintu",
      city: "dhaka",
      uni: "qw",
    },
  ];
  res.json(myJSONArray);
});

app.get("/five", function (req, res) {
  res.download("./upload/abc.jpg");
});

app.listen(5050, function () {
  console.log("Server Run Success");
});


// 10 Response Redirect

let express = require("express");

app = express();

app.get("/one", function (req, res) {
  res.end("this is a simple string one");
});

app.post("/two", function (req, res) {
  res.end("this is a simple string two");
});

app.get("/three", function (req, res) {
  res.status(201).end("igudfsg");
});

app.get("/four", function (req, res) {
  let myJSONArray = [
    {
      name: "Riyad",
      city: "comiia",
      uni: "uiu",
    },
    {
      name: "Chintu",
      city: "dhaka",
      uni: "qw",
    },
  ];
  res.json(myJSONArray);
});

app.get("/five", function (req, res) {
  res.download("./upload/abc.jpg");
});

app.get("/bangladesh", function (req, res) {
  res.redirect("http://localhost:3030/india");
});

app.get("/india", function (req, res) {
  res.send("this is india");
});

app.listen(3030, function () {
  console.log("Server Run Success");
});
///////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////////
/////////////////////////////////////////////////
/ ////  
///////////////////////////////////////////
let express = require("express");

app = express();

app.get("/one", function (req, res) {
  res.end("this is a simple string one");
});

app.post("/two", function (req, res) {
  res.end("this is a simple string two");
});

app.get("/three", function (req, res) {
  res.status(201).end("igudfsg");
});

app.get("/four", function (req, res) {
  let myJSONArray = [
    {
      name: "Riyad",
      city: "comiia",
      uni: "uiu",
    },
    {
      name: "Chintu",
      city: "dhaka",
      uni: "qw",
    },
  ];
  res.json(myJSONArray);
});
app.get("/five", function (req, res) {
  res.download("./upload/abc.jpg");
});

//11 Response Header
app.get("/six", function (req, res) {
  res.append("name", "riyad");
  res.append("id", "983652");
  res.append("age", "23");
  res.send("hello world");
  res.status(200).end();
});

//12 Response Set Cookies
app.get("/seven", function (req, res) {
  res.cookie("name ", "rocky");
  res.cookie("age ", "2");
  res.cookie("id ", "3279325");
  res.end("cookie end successfully");
});

//13 Response Clear Cookies
app.get("/eight", function (req, res) {
  res.clearCookie("name");
  res.clearCookie("age");
  res.end("cookie clear success");
});

app.listen(8080, function () {
  console.log("Server Run Success");
});

//14 Working With Request

////////////////////////////////////
///////////////////////////////////

//////////////////////////////////////
////////////////////////////////
//14 Working With Request

let express = require("express");
app = express();

//15 Simple Get Request
app.get("/", function (req, res) {
  res.end("this is a simple get request");
});

//16 Get Request With URL Query
app.get("/nine", function (req, res) {
  let fn = req.query.fn;
  let ln = req.query.ln;
  res.end(fn + "  " + ln);
  //postman -> http://localhost:7000/nine?fn=Mahbub&ln=Riyad
});

//17 Working With Get Request Header
app.get("/ten", function (req, res) {
  let fn = req.header("fn");
  let ln = req.query("ln");
  res.end(fn + "  " + ln);
});



app.listen(9090, function () {
  console.log("Server Run Success");
});


///////////////////////////////
///////////////////////////////

//18 Simple Post Request
let express = require("express");
app = express();

app.post("/", function (req, res) {
  res.end("this is a simple post request");
});

//19 Post Request With URL Query
app.post("/eleven", function (req, res) {
  let first = req.query.first;
  let last = req.query.last;

  res.send(first + " " + last);
  //postman =>  http://localhost:6000/eleven?first=riyad&last=hasan
});

//20 Post Request With Header Properties
app.get("/12", function (req, res) {
  let user = req.header("user");
  let password = req.header("password");
  res.send("user: " + user + "password: " + password);
});

app.listen(8000, function () {
  console.log("Server Run Success");
});


//////////////////////
//////////////////////

//21 Post application json
let express = require("express");
let bodyParser = require("body-parser");

app = express();

let.use(bodyParser.json());

app.post("/13", function (req, res) {
  let jsonData = res.body;
  let jsonString = JSON.stringify(jsonData);
  res.send(jsonString);
});

app.listen(9090, function () {
  console.log("Server Run Success");
});
*/

//22 Working With Multipart Form Data
let express = require("express");
let multer = require("multer");
let multer = multer();

let app = express();
app.use(multer.array());
app.use(express.static("public"));

app.post("/", function (req, res) {
  let JSONData = req.body;
  res.send(JSON.stringify(JSONData));
});

app.listen(8000, function () {
  console.log("Server Run Success");
});
