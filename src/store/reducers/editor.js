import {
  ADD_BOARD,
  REMOVE_BOARD,
  MOVE_BOARD,
  SAVE_GUIDE,
} from "../actions/editor";

export default function reducer(state = { boards: [], guide: [] }, action) {
  switch (action.type) {
    case ADD_BOARD: {
      return { ...state, boards: [...state.boards, action.payload] };
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
    case SAVE_GUIDE: {
      return { ...state, guide: action.payload };
    }
    default:
      return state;
  }
}
