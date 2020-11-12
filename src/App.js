import React from "react";
import { connect } from "react-redux";

import "./App.css";

import Cell from "./Cell";
import PlayerComponent from "./Player";

import {
  nextPlayer,
  playerWins,
  resetScores,
  undoMove,
  setComPlayer,
} from "./actions/player";
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
  board,
  undoMove,
  lastCell,
  comPlayer,
  setComPlayer,
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
        lastCell={lastCell}
        currentPlayer={currentPlayer}
        playerWins={playerWins}
        resetBoard={resetBoard}
        resetScores={resetScores}
        board={board}
        undoMove={undoMove}
        comPlayer={comPlayer}
        setComPlayer={setComPlayer}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    xWins: state.player.xWins,
    oWins: state.player.oWins,
    currentPlayer: state.player.currentPlayer,
    board: state.board,
    lastCell: state.board.lastCell,
    comPlayer: state.player.comPlayer,
  };
};

export default connect(mapStateToProps, {
  nextPlayer,
  playerWins,
  resetBoard,
  resetScores,
  undoMove,
  setComPlayer,
})(App);
