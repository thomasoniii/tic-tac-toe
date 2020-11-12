import { CLICK_CELL } from "./board";

export const NEXT_PLAYER = "NEXT_PLAYER";
export const PLAYER_WINS = "PLAYER_WINS";
export const RESET_SCORES = "RESET_SCORES";
export const IS_PLAYING = "IS_PLAYING";
export const SET_COM_PLAYER = "SET_COM_PLAYER";

// the nextPlayer function dispatches a NEXT_PLAYER action, toggling to
// whatever player value was passed in. We could also do this automatically
// in the action creator or the reducer
export function nextPlayer(nextPlayer) {
  return {
    type: NEXT_PLAYER,
    payload: { nextPlayer },
  };
}

// note when the current player has one. This action should:
// * increment that player's score.
// * clear the game board
// * start a new game with the other player going first.
export function playerWins() {
  return {
    type: PLAYER_WINS,
  };
}

export function resetScores() {
  return {
    type: RESET_SCORES,
  };
}

export function setIsPlaying(isPlaying) {
  return {
    type: IS_PLAYING,
    payload: { isPlaying },
  };
}

export function undoMove() {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(nextPlayer(otherPlayer(getState().player.currentPlayer)));
    const cell = state.board.lastCell;
    await dispatch({
      type: CLICK_CELL,
      payload: { cell, isUndoing: true },
    });
  };
}

export function setComPlayer(isCom) {
  return {
    type: SET_COM_PLAYER,
    payload: { isCom },
  };
}

// this is a utility function that gives us the other player.
export function otherPlayer(currentPlayer) {
  return currentPlayer === "X" ? "O" : "X";
}
