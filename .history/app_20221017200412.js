const express = require("express");

const feedRoutes = require("./routes/feed");

const app = express();

app.use("/feed", feedRoutes);

app.listen(80800, function () {
  console.log("server started on port 3000");
});
