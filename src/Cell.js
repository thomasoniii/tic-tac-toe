import React, { useState } from "react";

const Cell = (props) => {
  const [value, setValue] = useState(props.value);
  return (
    <td
      onClick={() => {
        console.log("Clicked on : ", value);
        if (value === undefined) {
          setValue("X");
        } else if (value === "X") {
          setValue("O");
        } else {
          setValue(undefined);
        }
      }}
      className={props.className}
    >
      {value}
    </td>
  );
};

export default Cell;
