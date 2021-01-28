import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  NEXT_PLAYER,
  PLAYER_WINS,
  RESET_SCORES,
  IS_PLAYING,
  SET_COM_PLAYER,
  CLICK_CELL,
  SET_COM_LEVEL,
} from "../constants";

import { initial as BOARD_INITIAL } from "../reducers/board";
import { initial as PLAYER_INITIAL } from "../reducers/player";
import { otherPlayer } from "../utils/player";

import {
  nextPlayer,
  playerWins,
  resetScores,
  undoMove,
  setIsPlaying,
  setComPlayer,
  setComLevel,
} from "./player";

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const initialState = {
  player: PLAYER_INITIAL,
  board: BOARD_INITIAL,
};

describe("player action tests", () => {
  it("can get nextPlayer X", () => {
    const PLAYER = "X";
    expect(nextPlayer(PLAYER)).toEqual({
      type: NEXT_PLAYER,
      payload: { nextPlayer: PLAYER },
    });
  });
  it("can get nextPlayer O", () => {
    const PLAYER = "O";
    expect(nextPlayer(PLAYER)).toEqual({
      type: NEXT_PLAYER,
      payload: { nextPlayer: PLAYER },
    });
  });
  it("can get playerWins", () => {
    expect(playerWins()).toEqual({ type: PLAYER_WINS });
  });
  it("can get resetScores", () => {
    expect(resetScores()).toEqual({ type: RESET_SCORES });
  });
  it("can get setIsPlaying X", () => {
    expect(setIsPlaying("X")).toEqual({
      type: IS_PLAYING,
      payload: { isPlaying: "X" },
    });
  });
  it("can get undoMove", async () => {
    const store = mockStore(initialState);

    store.dispatch(await undoMove());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: NEXT_PLAYER,
      payload: {
        nextPlayer: otherPlayer(store.getState().player.currentPlayer),
      },
    });
    expect(actions[1]).toEqual({
      type: CLICK_CELL,
      payload: { cell: "", isUndoing: true },
    });
  });
  it("can get setComPlayer", () => {
    const COMPUTER = true;
    expect(setComPlayer(COMPUTER)).toEqual({
      type: SET_COM_PLAYER,
      payload: { isCom: COMPUTER },
    });
  });
  it("can get setComLevel", () => {
    const COMPUTER = 1;
    expect(setComLevel(COMPUTER)).toEqual({
      type: SET_COM_LEVEL,
      payload: { level: COMPUTER },
    });
  });
});
