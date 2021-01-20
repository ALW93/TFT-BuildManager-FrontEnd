const { TFT_BASE, demoToken } = require("../../config");

export const TOKEN_KEY = "TOKEN_KEY";
export const SET_TOKEN = "tft-buildmanager/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "tft-buildmanager/authentication/REMOVE_TOKEN";
export const SET_USER = "tft-buildmanager/authentication/SET_USER";
export const SET_BOARDS = "tft-buildmanager/authentication/SET_BOARDS";
export const SET_EDITOR = "tft-buildmanager/authentication/SET_EDITOR";
export const SET_GUIDES = "tft-buildmanager/authentication/SET_GUIDES";
export const SET_COMMENTS = "tft-buildmanager/authentication/SET_COMMENTS";

export const removeToken = () => ({ type: REMOVE_TOKEN });
export const setToken = (token) => ({ type: SET_TOKEN, token });
export const setUser = (payload) => ({ type: SET_USER, payload });
export const setBoards = (payload) => ({ type: SET_BOARDS, payload });
export const setEditor = (payload) => ({ type: SET_USER, payload });
export const setGuides = (payload) => ({ type: SET_GUIDES, payload });
export const setComments = (payload) => ({ type: SET_COMMENTS, payload });

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  const id = window.localStorage.getItem("USER_ID");
  if (token) {
    dispatch(setToken(token));
    const response = await fetch(`${TFT_BASE}/users/id/${id}`);
    const data = await response.json();

    dispatch(setUser(data));
  }
};

export const demoLogin = () => async (dispatch) => {
  window.localStorage.setItem(TOKEN_KEY, demoToken);
  window.localStorage.setItem("USER_ID", "999");
  dispatch(setToken(demoToken));
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch(`${TFT_BASE}/users/session`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { token, user } = await response.json();
    window.localStorage.setItem("USER_ID", user.id);
    window.localStorage.setItem(TOKEN_KEY, token);
    dispatch(setUser(user));
    dispatch(setToken(token));
  }
};

export const logout = () => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();

  const response = await fetch(`${TFT_BASE}/users/session`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem("USER_ID");
  dispatch(removeToken());
};

export const createUser = (user) => async (dispatch) => {
  const response = await fetch(`${TFT_BASE}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (response.ok) {
    const { token } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    dispatch(setToken(token));
  }
};
