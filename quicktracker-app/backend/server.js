const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const mediaItemsRouter = require("./routes/mediaitems");
const usersRouter = require("./routes/users");

require("dotenv").config();

const app = express();

const port = process.env.port || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb established successfully");
});

app.use("/mediaItems", mediaItemsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log("server is running on port:" + port);
});
