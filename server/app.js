const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv  = require("dotenv");
const eventRoutes = require("./routes/events");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/events", eventRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err.message));
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

app.listen(3000);
