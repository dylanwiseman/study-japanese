import React, { useState } from "react";

export default function Reading(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button
        className={
          toggle ? "top-actions-buttons" : "top-actions-buttons clicked"
        }
        id="reading-button"
        onClick={() => {
          setToggle(!toggle);
          console.log("onclick fn");
          props.toggleReading();
        }}
      >
        Kana
      </button>
    </>
  );
}
