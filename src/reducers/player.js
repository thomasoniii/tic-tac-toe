import {
  NEXT_PLAYER,
  PLAYER_WINS,
  RESET_SCORES,
  IS_PLAYING,
  SET_COM_PLAYER,
  otherPlayer,
} from "../actions/player";

import { RESET_BOARD } from "../actions/board";

// keep track of the state of the players in the game.
// to start with, we just need to know the number of times each player has won,
// as well as who the currentPlayer is. This'll grow over time.
const initial = {
  xWins: 0,
  oWins: 0,
  currentPlayer: "X",
  startingPlayer: "X",
  comPlayer: undefined,
  isPlaying: true,
};

export default function (state = initial, action) {
  switch (action.type) {
    case NEXT_PLAYER: {
      const nextPlayer = action.payload.nextPlayer;
      const newState = { ...state };
      newState.currentPlayer = nextPlayer;
      return newState;
    }
    case PLAYER_WINS: {
      const newState = { ...state };
      const currentPlayer = newState.currentPlayer;
      if (currentPlayer === "X") {
        newState.xWins++;
      } else {
        newState.oWins++;
      }
      const nextStartingPlayer = otherPlayer(newState.startingPlayer);
      newState.startingPlayer = nextStartingPlayer;
      newState.currentPlayer = nextStartingPlayer;
      // I didn't add this function during the call - when the player has won,
      // if we're playing against the computer, then jump the comPlayer to the
      // other person.
      if (newState.comPlayer) {
        newState.comPlayer = otherPlayer(newState.comPlayer);
      }
      newState.isPlaying = true;
      return newState;
    }
    case RESET_SCORES: {
      const newState = { ...state };
      newState.xWins = 0;
      newState.oWins = 0;
      return newState;
    }
    case IS_PLAYING: {
      const newState = { ...state };
      newState.isPlaying = action.payload.isPlaying;
      return newState;
    }
    case SET_COM_PLAYER: {
      const { isCom } = action.payload;
      const newState = { ...state };
      if (!isCom) {
        newState.comPlayer = undefined;
      } else {
        newState.comPlayer = otherPlayer(newState.startingPlayer);
      }
      return newState;
    }
    // RESET_BOARD is -not- an action associated with the player state, but we still want
    // to respond to it. Here, we just know that if a user has reset the board, that a new
    // game is starting, so we set isPlaying = true.
    case RESET_BOARD: {
      const newState = { ...state };
      newState.isPlaying = true;
      return newState;
    }

    default:
      return state;
  }
}
