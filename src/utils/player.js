// this is a utility function that gives us the other player.
export function otherPlayer(currentPlayer) {
  return currentPlayer === "X" ? "O" : "X";
}

// so we filter out only the squares that have a value of ""
// we also filter out the "lastCell" square, since it's not in the board.
export function getPossiblePlays(board) {
  return Object.keys(board).filter(
    (cell) => cell !== "lastCell" && board[cell] === ""
  );
}
