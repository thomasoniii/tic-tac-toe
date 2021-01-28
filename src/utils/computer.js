import { getPossiblePlays } from "./player";
import { checkWinner } from "./game";
import { otherPlayer } from "./player";

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

function getComputerPlayMostlySmart(board, player) {
  if (Math.random() < 0.6) {
    return getComputerPlayReallySmart(board, player);
  } else {
    return getComputerPlayReallyStupid(board);
  }
}

function minmax(board, player) {
  // if we have a winner, then return it.
  if (checkWinner(board, player)) {
    return { score: 1 };
  }

  let score = Number.MIN_SAFE_INTEGER;
  let move = undefined;

  const possiblePlays = getPossiblePlays(board);
  for (const possiblePlay of possiblePlays) {
    const possibleBoard = { ...board, [possiblePlay]: player };
    let moveScore = -minmax(possibleBoard, otherPlayer(player)).score;
    if (moveScore > score) {
      score = moveScore;
      move = possiblePlay;
    }
  }

  if (move === undefined) {
    return { score: 0 };
  }

  return { score, move };
}

function getComputerPlayReallySmart(board, player) {
  return minmax(board, player, true).move;
}
