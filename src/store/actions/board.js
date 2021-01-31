import { TFT_BASE } from "../../config";
export const SET_BOARDS = "tft-buildmanager/authentication/SET_BOARDS";
export const SET_GUIDES = "tft-buildmanager/authentication/SET_GUIDES";
export const SET_COMMENTS = "tft-buildmanager/authentication/SET_COMMENTS";

export const setBoards = (payload) => ({ type: SET_BOARDS, payload });
export const setGuides = (payload) => ({ type: SET_GUIDES, payload });
const token = window.localStorage.getItem("TOKEN_KEY");

export const addBoard = (id, boardId, token) => async (dispatch) => {
  const response = await fetch(`${TFT_BASE}/users/id/${id}/boards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ boardId }),
  });
  if (response.ok) {
    return response;
  } else {
    return "error";
  }
};

export const removeBoard = (id, boardId, token) => async (dispatch) => {
  const response = await fetch(`${TFT_BASE}/users/id/${id}/boards`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ boardId }),
  });
};

export const deleteBoard = (boardId) => async (dispatch) => {
  const response = await fetch(`${TFT_BASE}/boards/id/${boardId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
