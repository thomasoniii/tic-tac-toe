import React from "react";
import { connect } from "react-redux";

import "./App.css";

import Cell from "./Cell";
import PlayerComponent from "./Player";

import { nextPlayer, playerWins } from "./actions/player";

function App({ xWins, oWins, currentPlayer, nextPlayer, playerWins }) {
  return (
    <div className="App">
      <table id="table1">
        <tbody>
          <tr>
            <Cell className="upper-left" currentPlayer={currentPlayer} />
            <Cell currentPlayer={currentPlayer} />
            <Cell className="upper-right" currentPlayer={currentPlayer} />
          </tr>
          <tr>
            <Cell currentPlayer={currentPlayer} />
            <Cell className="center" currentPlayer={currentPlayer} />
            <Cell currentPlayer={currentPlayer} />
          </tr>
          <tr>
            <Cell className="lower-left" currentPlayer={currentPlayer} />
            <Cell currentPlayer={currentPlayer} />
            <Cell className="lower-right" currentPlayer={currentPlayer} />
          </tr>
        </tbody>
      </table>
      <PlayerComponent
        xWins={xWins}
        oWins={oWins}
        currentPlayer={currentPlayer}
        nextPlayer={nextPlayer}
        playerWins={playerWins}
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

export default connect(mapStateToProps, { nextPlayer, playerWins })(App);
