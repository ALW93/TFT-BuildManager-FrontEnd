const { TFT_BASE, demoToken } = require("../../config");

export const TOKEN_KEY = "TOKEN_KEY";
export const SET_TOKEN = "tft-buildmanager/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "tft-buildmanager/authentication/REMOVE_TOKEN";
export const SET_ID = "tft-buildmanager/authentication/SET_ID";
export const REMOVE_ID = "tft-buildmanager/authentication/REMOVE_ID";

export const removeToken = () => ({ type: REMOVE_TOKEN });
export const setToken = (token) => ({ type: SET_TOKEN, token });
export const setId = (id) => ({ type: SET_ID, id });
export const removeId = () => ({ type: SET_ID });

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

export const demoLogin = () => async (dispatch) => {
  window.localStorage.setItem(TOKEN_KEY, demoToken);
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
    dispatch(setId(user.id));
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

  if (response.ok) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem("USER_ID");
    dispatch(removeId());
    dispatch(removeToken());
  }
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
