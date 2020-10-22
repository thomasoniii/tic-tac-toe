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
