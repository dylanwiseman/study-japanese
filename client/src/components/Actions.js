import React from "react";
import Previous from "./Previous";
import Next from "./Next";
import "../App.css";

export default function Actions(props) {
  return (
    <div className="bottom-actions-div">
      <Previous previous={props.previous} />
      <Next next={props.next} />
    </div>
  );
}
