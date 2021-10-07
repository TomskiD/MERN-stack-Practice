const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const homeRouter = require("./routes/home");

const app = express();

app.use("/", homeRouter)
// connect to database
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB!")
);

// listen
app.listen(3000);

const password = "2qG2dAgfjfHowpcN";
