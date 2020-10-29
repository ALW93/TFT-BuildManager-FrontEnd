const { TFT_BASE } = require("../../config");

export const TOKEN_KEY = "tft-buildmanager/authentication/token";
export const SET_TOKEN = "tft-buildmanager/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "tft-buildmanager/authentication/REMOVE_TOKEN";

export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setToken = (token) => ({ type: SET_TOKEN, token });

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    console.log("dispatching token!");
    dispatch(setToken(token));
  }
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
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    window.localStorage.removeItem(TOKEN_KEY);
    dispatch(removeToken());
  }
};
