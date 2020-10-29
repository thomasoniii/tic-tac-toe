import React from "react";
import { connect } from "react-redux";
import { clickCell } from "./actions/board";

// the Cell component renders an individual square on the game board, as well as
// letting the user add their mark or clear it.

const Cell = ({ className, currentPlayer, value, cell, clickCell }) => {
  return (
    <td
      onClick={() => {
        console.log("Clicked on : ", cell, currentPlayer);
        clickCell(cell, currentPlayer);
      }}
      className={className}
    >
      {value}
    </td>
  );
};

const mapStateToProps = (state, props) => {
  return {
    value: state.board[props.cell],
  };
};

export default connect(mapStateToProps, { clickCell })(Cell);
