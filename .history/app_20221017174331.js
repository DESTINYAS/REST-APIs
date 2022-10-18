const express = require("express");

const feedRoutes = require("./routes/feed");
const app = express();

app.use(feedRoutes);

app.listen(8080);
