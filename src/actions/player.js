const NEXT_PLAYER = "NEXT_PLAYER";
const PLAYER_WINS = "PLAYER_WINS";

export function nextPlayer(nextPlayer) {
  return {
    type: NEXT_PLAYER,
    payload: { nextPlayer },
  };
}

export function playerWins() {
  return {
    type: PLAYER_WINS,
  };
}
