import React, { useState } from "react";

// the Cell component renders an individual square on the game board, as well as
// letting the user add their mark or clear it.

const Cell = (props) => {
  const [value, setValue] = useState(props.value);
  const currentPlayer = props.currentPlayer;
  return (
    <td
      onClick={() => {
        console.log("Clicked on : ", value);
        if (value === undefined) {
          setValue(currentPlayer);
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
