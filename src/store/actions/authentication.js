const { TFT_BASE, demoToken } = require("../../config");

export const TOKEN_KEY = "tft-buildmanager/authentication/token";
export const SET_TOKEN = "tft-buildmanager/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "tft-buildmanager/authentication/REMOVE_TOKEN";

export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setToken = (token) => ({ type: SET_TOKEN, token });

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
    const { token } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
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
