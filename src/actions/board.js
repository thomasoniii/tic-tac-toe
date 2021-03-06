import { nextPlayer, setIsPlaying } from "./player";
import { otherPlayer, getPossiblePlays } from "../utils/player";
import { checkWinner } from "../utils/game";
import { getComputerPlay } from "../utils/computer";

import { CLICK_CELL, RESET_BOARD } from "../constants";

// clickCell dispatches a CLICK_CELL action with a given cell code + the player mark
export function clickCell(cell, player) {
  return async (dispatch, getState) => {
    // when we click on a cell, we need to check a few things.
    const state = getState();
    const isPlaying = state.player.isPlaying;

    // if a game is not active, then the click does nothing. Just bow out and stop.
    if (!isPlaying) {
      return;
    }

    // the user can only click on empty squares
    if (state.board[cell] === "") {
      await dispatch({
        type: CLICK_CELL,
        payload: { cell, player },
      });
      // next, we check for a winner.
      const isWinner = checkWinner(getState().board, player);
      // If there is a winner, then just set the isPlaying flag to false to stop the game.
      if (isWinner) {
        await dispatch(setIsPlaying(false));
      } else {
        // if there is not a winner, then advance to the next player.
        await dispatch(nextPlayer(otherPlayer(player)));
      }

      // check for a computer player. If the com is playing, then fall into here.
      // in the future, we're going to refactor this out into a separate action based
      // upon which computer we're playing against.
      //
      // this initial com just chooses a random square
      if (state.player.comPlayer && state.player.comPlayer !== player) {
        // so to do that, we get the board
        const board = getState().board;
        // the board is an object of key/value pairs. We want to find
        // all of the squares that are empty.

        // computer needs to know:
        // the board.
        // how to click.

        const comCell = getComputerPlay(
          state.player.comLevel,
          board,
          state.player.comPlayer
        );

        // and click on that cell, as the comPlayer.
        await dispatch(clickCell(comCell, state.player.comPlayer));
      }
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
