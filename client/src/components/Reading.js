import React from "react";

export default function Reading(props) {
  return (
    <>
      <button
        className="top-actions-buttons"
        id="reading-button"
        onClick={() => {
          console.log("onclick fn");
          props.toggleReading();
        }}
      >
        Kana
      </button>
    </>
  );
}
