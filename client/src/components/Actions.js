import React, { useState } from "react";
import Previous from "./Previous";
import New from "./New";
import Edit from "./Edit";
import Delete from "./Delete";
import Next from "./Next";

export default function Actions(props) {
  const [newToggle, setNewToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div>
      <Previous previous={props.previous} />
      <button
        onClick={() => {
          setNewToggle(!newToggle);
        }}
      >
        New
      </button>
      <button
        onClick={() => {
          setEditToggle(!editToggle);
        }}
      >
        Edit
      </button>
      <Delete />
      <Next next={props.next} />
      <Edit />
      {newToggle && <New />}
    </div>
  );
}
