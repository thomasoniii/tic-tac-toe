import { getPossiblePlays } from "./player";
import { checkWinner } from "./game";

const comDispatch = [
  getComputerPlayReallyStupid, // 0
  getComputerPlayKindaStupid, // 1
  getComputerPlayMostlySmart, // 2
  getComputerPlayReallySmart, // 3
];

export function getComputerPlay(level, board, player) {
  return comDispatch[level](board, player);
}

// really stupid - just picks a random square
function getComputerPlayReallyStupid(board) {
  const possiblePlays = getPossiblePlays(board);
  // finally, we just choose a random square to play in
  return possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
}

// kinda stupid - picks a winning square, if possible.
// and if not, then picks a random square.
function getComputerPlayKindaStupid(board, player) {
  const possiblePlays = getPossiblePlays(board);

  for (const possiblePlay of possiblePlays) {
    const possibleBoard = { ...board, [possiblePlay]: player };
    const isWinner = checkWinner(possibleBoard, player);
    if (isWinner) {
      return possiblePlay;
    }
  }

  // if the computer can't win, then play randomly
  return possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
}

function getComputerPlayMostlySmart(board) {
  throw new Error("cannot play against mostly smart computer");
}

function getComputerPlayReallySmart(board) {
  throw new Error("cannot play against really smart computer");
}
