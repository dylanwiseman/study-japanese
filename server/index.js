const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const database = require("./database/connection");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../client/build")));

//Setup server port and connect to database:
const PORT = process.env.PORT || 5004;
database.connect();

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
