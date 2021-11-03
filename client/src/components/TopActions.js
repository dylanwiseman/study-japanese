import React, { useState } from "react";
import Edit from "./Edit";
import Reading from "./Reading";

export default function TopActions(props) {
  const [editToggle, setEditToggle] = useState(false);
  const [newToggle, setNewToggle] = useState(false);
  return (
    <div id="top-actions-bar">
      <button
        className={
          newToggle ? "top-actions-buttons new-clicked" : "top-actions-buttons"
        }
        id="new-button"
        onClick={() => {
          props.toggleNew();
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
    </div>
  );
}
