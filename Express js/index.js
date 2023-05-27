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

let express = require("express");

app = express();

app.get("/", function (req, res) {
  res.send("home page");
});

app.get("/about", function (req, res) // /about-> URI
{  
  res.send("about page!");
});

app.get("/terms", function (req, res) {
  res.send("terms!");
});

app.get("/contact", function (req, res) {
  res.send("contact us");
});

app.listen(8080, function () {
  console.log("Server Run Success");
});
