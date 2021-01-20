import { TFT_BASE } from "../../config";

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
