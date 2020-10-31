import {
  SET_TOKEN,
  REMOVE_TOKEN,
  SET_ID,
  REMOVE_ID,
} from "../actions/authentication";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN: {
      return { ...state, token: action.token };
    }
    case REMOVE_TOKEN: {
      const newState = { ...state };
      delete newState.token;
      return newState;
    }
    case SET_ID: {
      return { ...state, id: action.id };
    }
    case REMOVE_ID: {
      const newState = { ...state };
      delete newState.id;
      return newState;
    }
    default:
      return state;
  }
}
