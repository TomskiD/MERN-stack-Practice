import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/users.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoutes);

const DB_CONNECTION =
  "mongodb+srv://test_database:2qG2dAgfjfHowpcN@rest.bpir1.mongodb.net/Rest?retryWrites=true&w=majority";
const PORT = process.env.Port || 5000;

mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));

app.listen(3000);
