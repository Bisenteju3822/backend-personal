const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const personalRoute = require("./routes/personalRoute");

mongoose.connect("mongodb://127.0.0.1:27017/Personalfinance").then(() => {
  console.log("DB connected!!!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/personal", personalRoute);

app.listen(8000, () => {
  console.log("Server running on port 8000!");
});
