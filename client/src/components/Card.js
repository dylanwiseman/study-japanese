import React from "react";
import { useSelector } from "react-redux";

export default function Card() {
  const vocabArray = useSelector((state) => state.vocab);
  let i = 0;
  const activeWord = vocabArray[i];

  console.log("active word: ", activeWord.word);

  console.log("vocabArray recieved by Card comp:", vocabArray);
  return (
    <div>
      <div className="card-front">
        <h2>{activeWord.word}</h2>
        <h4>{activeWord.reading}</h4>
      </div>
      <div className="card-back">
        <h3>{activeWord.definition}</h3>
      </div>
    </div>
  );
}
