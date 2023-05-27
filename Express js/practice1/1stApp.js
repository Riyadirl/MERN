//2 Express Application

let express = require("express");

app = express();

app.get("/", function (req, res) {
  res.send("Hello express!");
});

app.listen(8000, function () {
  console.log("Server Run Success");
});
