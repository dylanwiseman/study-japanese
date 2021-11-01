import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function New(props) {
  const dispatch = useDispatch();

  const [newWord, setNewWord] = useState("");
  const [newReading, setNewReading] = useState("");
  const [newDefinition, setNewDefinition] = useState("");

  async function createVocab(newWordObject) {
    const { data } = await axios.post(
      "http://localhost:5004/vocab/new",
      newWordObject
    );
    console.log("data returned from create request:", data);
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWordObject = {
      word: newWord,
      reading: newReading,
      definition: newDefinition,
    };
    const data = createVocab(newWordObject);
    dispatch({
      type: "GET_VOCAB",
      value: data,
    });
    props.toggleNew();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="word">Word: </label>
        <input
          type="text"
          id="word"
          value={newWord}
          onChange={(e) => {
            setNewWord(e.target.value);
          }}
        />
        <label htmlFor="reading">Reading: </label>
        <input
          type="text"
          id="reading"
          value={newReading}
          onChange={(e) => {
            setNewReading(e.target.value);
          }}
        />
        <label htmlFor="definition">Definition: </label>
        <input
          type="text"
          id="definition"
          value={newDefinition}
          onChange={(e) => {
            setNewDefinition(e.target.value);
          }}
        />
        <input type="submit" value="Add New Word" />
      </form>
    </div>
  );
}
