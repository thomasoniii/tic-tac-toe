import { CLICK_CELL, RESET_BOARD } from "../constants";

/*
  now we have a board in redux. There are several different ways to structure the board object,
  and I set it up to use keys for each square. They stand for "top left", "middle right", "bottom left",
  etc. It's laid out like this:

   TL | T  | TR
  ----+----+----
   ML | M  | MR
  ----+----+----
   BL | B  | BR

   the lastCell keeps track of the last cell clicked on, to ensure that the player can only
   move once and that they can't change the board.
*/

export const initial = {
  TL: "",
  T: "",
  TR: "",
  ML: "",
  M: "",
  MR: "",
  BL: "",
  B: "",
  BR: "",
  lastCell: "",
};

export default function (state = initial, action) {
  switch (action.type) {
    case CLICK_CELL: {
      const newState = { ...state };
      const { cell, player, isUndoing } = action.payload;
      // only allow the user to click on an empty cell. They should not be able to
      // click on a cell that already has a value.
      if (newState[cell] === "") {
        // as long as the cell is empty, set the cell's value to the current player
        newState[cell] = player;
        // look at the player who clicked on the last cell.
        const lastClickValue = newState[newState.lastCell];
        // if the last mark placed is from us, then clear out that cell.
        // that means the user changed their mind and moved the mark.
        // if the last mark placed is NOT from us, then do not clear out the other
        // players last mark.
        if (lastClickValue === player) {
          newState[newState.lastCell] = "";
        }
        // and note the last cell clicked on
        newState.lastCell = cell;
      } else if (isUndoing) {
        newState[newState.lastCell] = "";
        newState.lastCell = "";
      }
      return newState;
    }
    case RESET_BOARD: {
      // when we reset the board, we can simply return the initial empty state
      return initial;
    }
    default:
      return state;
  }
}
