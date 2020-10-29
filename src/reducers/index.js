import { combineReducers } from "redux";

import player from "./player";
import board from "./board";

const rootReducer = combineReducers({
  player,
  board,
});

export default rootReducer;
