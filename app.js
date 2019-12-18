const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config");
const setupController = require("./controllers/setupController.js");
const apiController = require("./controllers/apiController");

const port = process.env.PORT | 3000;

app.use("/", express.static(__dirname + "/public/dist"));

app.set("view engine", "ejs");

mongoose.connect(config.getDbConnectionString(), {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});
setupController(app);
apiController(app);

app.listen(port);