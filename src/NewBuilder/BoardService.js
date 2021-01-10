import { TFT_BASE } from "../config";

export const createBoard = async (payload) => {
  const response = await fetch(`${TFT_BASE}/boards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    console.log("success");
  }
};
