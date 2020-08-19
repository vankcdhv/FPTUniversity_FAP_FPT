const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const port = process.env.PORT || 3000;

dotenv.config({
  path: "./config/.env"
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");

let routes = require("./src/api/common/routes"); //importing route
routes(app);

app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + " not found"
  });
});

app.listen(port);

console.log("RESTful API server started on: " + port);