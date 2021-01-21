import { SET_BOARDS, SET_GUIDES } from "../actions/board";

export default function reducer(state = { boards: {}, guides: {} }, action) {
  switch (action.type) {
    case SET_BOARDS: {
      return { ...state, boards: action.payload };
    }
    case SET_GUIDES: {
      return { ...state, guides: action.payload };
    }
    default:
      return state;
  }
}
