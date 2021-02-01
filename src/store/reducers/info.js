import { SET_BOARDS } from "../actions/authentication";
import { DELETE_BOARD } from "../actions/board";

export default function reducer(state = { boards: {} }, action) {
  switch (action.type) {
    case SET_BOARDS: {
      return { ...state, boards: action.payload };
    }
    case DELETE_BOARD: {
      let obj = {};
      Object.keys(state.boards).forEach((id) => {
        if (parseInt(id) !== action.id) obj[id] = state.boards[id];
      });
      return { ...state, boards: obj };
    }
    default:
      return state;
  }
}
