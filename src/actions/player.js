const NEXT_PLAYER = "NEXT_PLAYER";
const PLAYER_WINS = "PLAYER_WINS";

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
