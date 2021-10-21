import React from "react";
import { useSelector } from "react-redux";

export default function Card(props) {
  const vocabObj = useSelector((state) => state.vocab);
  console.log(vocabObj);
  const vocabArray = vocabObj.data;
  const activeWord = vocabArray[props.index];

  console.log(vocabArray);

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
