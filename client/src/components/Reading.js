import React from "react";

export default function Reading(props) {
  return (
    <>
      <button
        onClick={() => {
          console.log("onclick fn");
          props.toggleReading();
        }}
      >
        Reading
      </button>
    </>
  );
}
