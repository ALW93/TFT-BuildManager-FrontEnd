import { SET_TOKEN, REMOVE_TOKEN, SET_USER } from "../actions/authentication";

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
    case SET_USER: {
      return { ...state, user: action.payload };
    }

    default:
      return state;
  }
}
