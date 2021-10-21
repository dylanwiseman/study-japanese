const { MongoClient } = require("mongodb");
require("dotenv").config();
const URI = process.env.URI || require("./config");
const client = new MongoClient(URI);

// Get all vocab words:
async function getVocab() {
  console.log("getting vocab words...");
  const cursor = client.db("study_japanese").collection("vocab").find();
  const results = await cursor.toArray();
  return results;
}

//Create new vocab word:
async function createVocab(newVocab) {
  console.log("adding ", newVocab.word);
  const confirmation = await client
    .db("study_japanese")
    .collection("vocab")
    .insertOne(newVocab);
  const result = getVocab();
  return result;
}

// Main connnection function:
async function connect() {
  try {
    await client.connect();
    console.log("japanese db connected");
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { connect, getVocab, createVocab };
