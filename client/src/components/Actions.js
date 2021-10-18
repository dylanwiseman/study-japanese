import React from "react";
import Previous from "./Previous";
import New from "./New";
import Edit from "./Edit";
import Delete from "./Delete";
import Next from "./Next";

export default function Actions() {
  return (
    <div>
      <Previous></Previous>
      <New></New>
      <Edit></Edit>
      <Delete></Delete>
      <Next></Next>
    </div>
  );
}
