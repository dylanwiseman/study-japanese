import React from "react";

export default function Next(props) {
  return (
    <div className="next-button-div">
      <button className="prev-next next-button" onClick={props.next}>
        {`>`}
      </button>
    </div>
  );
}
