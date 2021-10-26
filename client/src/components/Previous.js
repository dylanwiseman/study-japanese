import React from "react";

export default function Previous(props) {
  return (
    <div className="prev-button-div">
      <button className="prev-button prev-next" onClick={props.previous}>
        {`Back`}
      </button>
    </div>
  );
}
