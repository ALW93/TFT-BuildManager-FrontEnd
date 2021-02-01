import { TFT_BASE } from "../../config";

export const CREATE_BOARD = "tft-buildmanager/info/CREATE_BOARD";
export const DELETE_BOARD = "tft-buildmanager/info/DELETE_BOARD";
export const UPDATE_BOARD = "tft-buildmanager/info/UPDATE_BOARD";

export const newBoard = (payload) => ({ type: CREATE_BOARD, payload });
export const delBoard = (id) => ({ type: DELETE_BOARD, id });

const token = window.localStorage.getItem("TOKEN_KEY");

// *** ADD BOARD TO COLLECTION ***
export const addBoard = (id, boardId, data) => async (dispatch) => {
  console.log(token);
  const response = await fetch(`${TFT_BASE}/users/id/${id}/boards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ boardId }),
  });
  if (response.ok) {
    dispatch(newBoard(data));
    return response;
  }
};

// *** REMOVE BOARD FROM COLLECTION ***
export const removeBoard = (id, boardId) => async (dispatch) => {
  const response = await fetch(`${TFT_BASE}/users/id/${id}/boards`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ boardId }),
  });
  console.log(boardId);
  dispatch(delBoard(boardId));
};

// ** PUBLISH A NEW BOARD ***
export const createBoard = (payload) => async (dispatch) => {
  const response = await fetch(`${TFT_BASE}/boards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  dispatch(newBoard(data.newBoard));
  return data.newBoard;
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

// ** PUBLISH A NEW SUBBOARD ***
export const createSub = (payload) => async (dispatch) => {
  const response = await fetch(
    `${TFT_BASE}/boards/id/${payload.boardId}/subBoard`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );
  const data = await response.json();
  return data.newSub;
};
