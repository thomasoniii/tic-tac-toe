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
  throw new Error("cannot play against mostly smart computer");
}

function minmax(board, player, winningMove = false) {
  const possiblePlays = getPossiblePlays(board);
  const scores = [];
  for (const possiblePlay of possiblePlays) {
    const possibleBoard = { ...board, [possiblePlay]: player };
    const isWinner = checkWinner(possibleBoard, player) ? 1 : 0;
    const isLoser = checkWinner(possibleBoard, otherPlayer(player)) ? -1 : 0;
    if (isWinner || isLoser) {
      // { possiblePlay : "M", score : 1}
      scores.push({ possiblePlay, score: Math.max(isWinner, isLoser) });
    } else {
      const score = -getComputerPlayReallySmart(
        possibleBoard,
        otherPlayer(player)
      );

      scores.push({ possiblePlay, score });
    }
  }
  let max = 0;
  let play = undefined;
  for (const group of scores) {
    if (group.score > max) {
      play = group.possiblePlay;
    }
    max = Math.max(max, group.score);
  }

  if (winningMove) {
    if (play !== undefined) {
      return play;
    } else {
      return possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
    }
  } else {
    return max;
  }
}

function getComputerPlayReallySmart(board, player) {
  return minmax(board, player, true);
}
