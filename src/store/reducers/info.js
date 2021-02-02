import { SET_BOARDS } from "../actions/authentication";
import { DELETE_BOARD, CREATE_BOARD, UPDATE_BOARD } from "../actions/board";

export default function reducer(state = { boards: {} }, action) {
  switch (action.type) {
    case SET_BOARDS: {
      return { ...state, boards: action.payload };
    }
    case CREATE_BOARD: {
      let obj = state.boards;
      obj[action.payload.id] = action.payload;
      return { ...state, boards: obj };
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
