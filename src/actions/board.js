import { nextPlayer, otherPlayer, setIsPlaying } from "./player";
import { checkWinner } from "../utils/game";

export const CLICK_CELL = "CLICK_CELL";
export const RESET_BOARD = "RESET_BOARD";

// clickCell dispatches a CLICK_CELL action with a given cell code + the player mark
export function clickCell(cell, player) {
  return async (dispatch, getState) => {
    // when we click on a cell, we need to check a few things.
    const state = getState();
    const lastCell = state.board.lastCell;
    const lastCellMark = state.board[lastCell];
    const isPlaying = state.player.isPlaying;

    // if a game is not active, then the click does nothing. Just bow out and stop.
    if (!isPlaying) {
      return;
    }

    // if the user has double clicked on the same cell, advance to next player
    if (cell === lastCell && player === lastCellMark) {
      // next, we check for a winner.
      const isWinner = checkWinner(state.board, player);
      // If there is a winner, then just set the isPlaying flag to false to stop the game.
      if (isWinner) {
        dispatch(setIsPlaying(false));
      } else {
        // if there is not a winner, then advance to the next player.
        dispatch(nextPlayer(otherPlayer(player)));
      }
    } else {
      // otherwise, record the click and let the user change it later
      await dispatch({
        type: CLICK_CELL,
        payload: { cell, player },
      });
    }
  };
}

// resetBoard dispatches a RESET_BOARD action, which does not require a payload.
// resetBoard is used to start a game over.
export function resetBoard() {
  return {
    type: RESET_BOARD,
  };
}
