const { TFT_BASE } = require("../../config");

export const SET_BOARDS = "tft-buildmanager/authentication/SET_BOARDS";
export const SET_COMMENTS = "tft-buildmanager/authentication/SET_COMMENTS";
export const TOKEN_KEY = "tft-buildmanager/authentication/TOKEN_KEY";
export const ID_KEY = "tft-buildmanager/authentication/ID_KEY";
export const SET_TOKEN = "tft-buildmanager/authentication/SET_TOKEN";
export const SET_USER = "tft-buildmanager/authentication/SET_USER";

export const setToken = (token) => ({ type: SET_TOKEN, token });
export const setUser = (payload) => ({ type: SET_USER, payload });
export const setBoards = (payload) => ({ type: SET_BOARDS, payload });

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  const id = window.localStorage.getItem("USER_ID");
  if (token) {
    dispatch(setToken(token));
    const response = await fetch(`${TFT_BASE}/users/id/${id}`);
    const data = await response.json();
    dispatch(setUser(data.user));
    dispatch(setBoards(data.boards));
  }
};

// export const demoLogin = () => async (dispatch) => {
//   window.localStorage.setItem(TOKEN_KEY, demoToken);
//   window.localStorage.setItem("USER_ID", "999");
//   dispatch(setToken(demoToken));
// };

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
    dispatch(setBoards(user.boards));
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
  window.location.reload();
};

export const createUser = (user) => async (dispatch) => {
  const response = await fetch(`${TFT_BASE}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (response.ok) {
    const { token, user } = await response.json();
    console.log({ token, user });
    window.localStorage.setItem("USER_ID", user.id);
    window.localStorage.setItem(TOKEN_KEY, token);
    dispatch(setToken(token));
  }
};
