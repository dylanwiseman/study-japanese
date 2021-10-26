import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../App.css";

export default function Card(props) {
  const [flipToggle, setFlipToggle] = useState(false);

  const vocabObj = useSelector((state) => state.vocab);
  console.log(vocabObj);
  const vocabArray = vocabObj.data;
  const activeWord = vocabArray[props.index];

  console.log(vocabArray);

  return (
    <div
      className="scene"
      onClick={() => {
        setFlipToggle(!flipToggle);
      }}
    >
      <div className={flipToggle ? "card is-flipped" : "card"}>
        <div className="card__face card__face--front">
          <h2>{activeWord.word}</h2>
          <h4>{props.readingToggle ? activeWord.reading : "??"}</h4>
        </div>
        <div className="card__face card__face--back">
          <h3>{activeWord.definition}</h3>
        </div>
      </div>
    </div>
  );
}
