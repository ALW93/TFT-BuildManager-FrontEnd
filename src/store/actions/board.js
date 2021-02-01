import { TFT_BASE } from "../../config";

export const DELETE_BOARD = "tft-buildmanager/info/DELETE_BOARD";

export const delBoard = (id) => ({ type: DELETE_BOARD, id });

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
  }
};

// *** REMOVE BOARD FROM COLLECTION ***
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

// *** DELETE OWN PUBLISHED BOARD ***
export const deleteBoard = (boardId) => async (dispatch) => {
  const response = await fetch(`${TFT_BASE}/boards/id/${boardId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch(delBoard(boardId));
};
