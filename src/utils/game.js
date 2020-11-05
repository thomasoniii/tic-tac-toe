/*
  tic-tac-toe is simple enough that we can just brute force check all the winning cases.

  Recall that our board looks like this:

  TL | T  | TR
 ----+----+----
  ML | M  | MR
 ----+----+----
  BL | B  | BR

  So we need to check the 3 horizontal rows, the 3 vertical columns, and the 2 diagonals.

  Our checkWinner function takes the full game board, and the player that we're checking against.

  The algorithm is:
    * for each combination, check to see if the first cell matches our player. If it does, continue.
    * Then, check to see if the first cell matches the second, and the second matches the third.
      This directly implies that the first has to equal the third.
    * If that's successful, then return true. Otherwise, check the next case.
    * and repeat until all the cases are checked.
*/

export function checkWinner(board, player) {
  const playerWins =
    (board.TL === player && board.TL === board.T && board.T === board.TR) ||
    (board.ML === player && board.ML === board.M && board.M === board.MR) ||
    (board.BL === player && board.BL === board.B && board.B === board.BR) ||
    (board.TL === player && board.TL === board.ML && board.ML === board.BL) ||
    (board.T === player && board.T === board.M && board.M === board.B) ||
    (board.TR === player && board.TR === board.MR && board.MR === board.BR) ||
    (board.TL === player && board.TL === board.M && board.M === board.BR) ||
    (board.BL === player && board.BL === board.M && board.M === board.TR);

  return playerWins;
}
