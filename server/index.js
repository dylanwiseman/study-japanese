const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
// const bcrypt = require("bcryptjs");
const database = require("./database");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../client/build")));

//Setup server port and connect to database:
const PORT = process.env.PORT || 5004;
database.connect();

//Get vocab words:
app.get("/vocab", async (req, res) => {
  const result = await database.getVocab();
  res.send(result);
});

//Create new vocab word:
app.post("/vocab/new", async (req, res) => {
  const result = await database.createVocab(req.body);
  console.log("result returned from create call:", result);
  res.send(result);
});

//Delete Vocab word:
app.delete("/vocab/delete", async (req, res) => {
  console.log("delete req:", req.body);
  const result = await database.deleteVocab(req.body);
  res.send(result);
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
