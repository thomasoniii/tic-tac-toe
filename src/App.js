import React from "react";
import { connect } from "react-redux";

import "./App.css";

import Cell from "./Cell";
import PlayerComponent from "./Player";

import { nextPlayer, playerWins, resetScores } from "./actions/player";
import { resetBoard } from "./actions/board";

// the app lays out the game board as well as the display of the player information.

function App({
  xWins,
  oWins,
  currentPlayer,
  nextPlayer,
  playerWins,
  resetBoard,
  resetScores,
}) {
  return (
    <div className="App">
      <table id="table1">
        <tbody>
          <tr>
            <Cell
              className="upper-left"
              currentPlayer={currentPlayer}
              cell="TL"
            />
            <Cell currentPlayer={currentPlayer} cell="T" />
            <Cell
              className="upper-right"
              currentPlayer={currentPlayer}
              cell="TR"
            />
          </tr>
          <tr>
            <Cell currentPlayer={currentPlayer} cell="ML" />
            <Cell className="center" currentPlayer={currentPlayer} cell="M" />
            <Cell currentPlayer={currentPlayer} cell="MR" />
          </tr>
          <tr>
            <Cell
              className="lower-left"
              currentPlayer={currentPlayer}
              cell="BL"
            />
            <Cell currentPlayer={currentPlayer} cell="B" />
            <Cell
              className="lower-right"
              currentPlayer={currentPlayer}
              cell="BR"
            />
          </tr>
        </tbody>
      </table>
      <PlayerComponent
        xWins={xWins}
        oWins={oWins}
        currentPlayer={currentPlayer}
        nextPlayer={nextPlayer}
        playerWins={playerWins}
        resetBoard={resetBoard}
        resetScores={resetScores}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    xWins: state.player.xWins,
    oWins: state.player.oWins,
    currentPlayer: state.player.currentPlayer,
  };
};

export default connect(mapStateToProps, {
  nextPlayer,
  playerWins,
  resetBoard,
  resetScores,
})(App);
