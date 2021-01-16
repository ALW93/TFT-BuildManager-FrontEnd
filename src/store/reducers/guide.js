import { ADD_BOARD, REMOVE_BOARD, MOVE_BOARD } from "../actions/guide";

export default function reducer(state = { boards: [] }, action) {
  switch (action.type) {
    case ADD_BOARD: {
      return { ...state, boards: action.payload };
    }
    case REMOVE_BOARD: {
      const newBoards = state.boards;
      return {
        ...state,
        boards: newBoards.filter((e, i) => i !== action.index),
      };
    }
    case MOVE_BOARD: {
      return { ...state };
    }

    default:
      return state;
  }
}
