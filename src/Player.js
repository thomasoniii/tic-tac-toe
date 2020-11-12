import React from "react";
import classNames from "classnames";

import { checkWinner } from "./utils/game";

import "./player.css";

const PlayerComponent = ({
  xWins = 0,
  oWins = 0,
  currentPlayer = "X",
  playerWins,
  resetBoard,
  resetScores,
  board,
  undoMove,
  lastCell,
  comPlayer,
  setComPlayer,
}) => (
  <div className="player-table">
    <div className="grid-row header-row">
      <div
        className={classNames({
          "current-player": currentPlayer === "X",
        })}
      >
        X
      </div>
      <div
        className={classNames({
          "current-player": currentPlayer === "O",
        })}
      >
        O
      </div>
    </div>
    <div className="grid-row">
      <div>{xWins}</div>
      <div>{oWins}</div>
    </div>
    <div className="button-row">
      <button
        disabled={checkWinner(board, currentPlayer) || lastCell === ""}
        onClick={() => undoMove()}
      >
        Undo
      </button>
      <button
        disabled={!checkWinner(board, currentPlayer)}
        onClick={() => {
          playerWins();
          resetBoard();
        }}
      >
        I won
      </button>
      <button
        onClick={() => {
          resetBoard();
        }}
      >
        Reset board
      </button>
      <button
        onClick={() => {
          resetScores();
        }}
      >
        Reset Scores
      </button>
      <br />
      <input
        type="checkbox"
        checked={Boolean(comPlayer)}
        onChange={(e) => setComPlayer(e.target.checked)}
      />
      Play against computer
    </div>
  </div>
);

export default PlayerComponent;
