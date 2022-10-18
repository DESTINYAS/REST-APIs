const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");

const app = express();
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.listen(3000, function () {
  console.log("server started on port 3000");
});
