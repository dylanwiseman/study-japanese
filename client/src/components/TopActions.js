import React, { useState } from "react";
import Edit from "./Edit";
import New from "./New";
import Reading from "./Reading";

export default function TopActions(props) {
  const [newToggle, setNewToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div id="top-actions-bar">
      <button
        className="top-actions-buttons"
        id="new-button"
        onClick={() => {
          setNewToggle(!newToggle);
        }}
      >
        New
      </button>
      <button
        className="top-actions-buttons"
        id="edit-button"
        onClick={() => {
          setEditToggle(!editToggle);
        }}
      >
        Edit
      </button>
      <Reading toggleReading={props.toggleReading} />
      {editToggle && <Edit />}
      {newToggle && <New />}
    </div>
  );
}
