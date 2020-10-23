// keep track of the state of the players in the game.
// to start with, we just need to know the number of times each player has won,
// as well as who the currentPlayer is. This'll grow over time.
const initial = {
  xWins: 0,
  oWins: 0,
  currentPlayer: "X",
};

export default function (state = initial, action) {
  switch (action.type) {
    case "NEXT_PLAYER": {
      const nextPlayer = action.payload.nextPlayer;
      const newState = { ...state };
      newState.currentPlayer = nextPlayer;
      return newState;
    }
    case "PLAYER_WINS": {
      const newState = { ...state };
      const currentPlayer = newState.currentPlayer;
      if (currentPlayer === "X") {
        newState.xWins++;
      } else {
        newState.oWins++;
      }
      return newState;
    }
    default:
      return state;
  }
}
