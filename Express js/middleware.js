//24 Middleware
//->application
//_>route

//25 Application Middleware(for all)

let express = require("express");
let app = express();
//for all
app.use(function (req, res, next) {
  console.log("this application level middleware");
  next();
});

app.get("/", function (req, res) {
  res.send("home page");
});

app.get("/terms", function (req, res) {
  res.send("terms!");
});

app.get("/contact", function (req, res) {
  res.send("contact us");
});

app.listen(4000, function () {
  console.log("Server Run Success");
});

//26 Route Middleware(for single)

let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("home page");
});

app.get("/terms", function (req, res) {
  res.send("terms!");
});

//for individual
app.use("/contact", function (req, res, next) {
  console.log("im contact middleware!");
  next();
});

app.get("/contact", function (req, res) {
  res.send("contact us");
});

app.listen(4000, function () {
  console.log("Server Run Success");
});
