export const CLICK_CELL = "CLICK_CELL";
export const RESET_BOARD = "RESET_BOARD";

// clickCell dispatches a CLICK_CELL action with a given cell code + the player mark
export function clickCell(cell, player) {
  return {
    type: CLICK_CELL,
    payload: { cell, player },
  };
}

// resetBoard dispatches a RESET_BOARD action, which does not require a payload.
export function resetBoard() {
  return {
    type: RESET_BOARD,
  };
}
