import React, { useState } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import New from "./New";

export default function TopActions() {
  const [newToggle, setNewToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div>
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
      <Edit />
      {newToggle && <New />}
    </div>
  );
}
