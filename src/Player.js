import React from "react";
import classNames from "classnames";

import "./player.css";

const PlayerComponent = ({
  xWins = 0,
  oWins = 0,
  currentPlayer = "X",
  nextPlayer,
  playerWins,
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
      <button onClick={() => playerWins()}>I won</button>
      <button
        onClick={() => {
          const switchToPlayer = currentPlayer === "X" ? "O" : "X";
          nextPlayer(switchToPlayer);
        }}
      >
        Next Player
      </button>
    </div>
  </div>
);

export default PlayerComponent;
