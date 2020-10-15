import React from "react";

import "./App.css";

import Cell from "./Cell";

function App() {
  return (
    <div className="App">
      <table id="table1">
        <tbody>
          <tr>
            <Cell className="upper-left" />
            <Cell />
            <Cell className="upper-right" />
          </tr>
          <tr>
            <Cell />
            <Cell className="center" />
            <Cell />
          </tr>
          <tr>
            <Cell className="lower-left" />
            <Cell />
            <Cell className="lower-right" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
