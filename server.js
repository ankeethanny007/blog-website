var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static("./dist/ankeethanny-blog"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/ankeethanny-blog" });
});

app.listen(port, function () {
  console.log("Our app is running on http://localhost:" + port);
});
