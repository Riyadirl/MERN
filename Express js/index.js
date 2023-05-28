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
*/

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
