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

export const parseTeam = (data) => {
  return Object.values(data.board).filter((e) => e);
};

export const parseCover = (data) => {
  let obj = Object.values(data.board).filter((e) => e && e.items);
  return obj[Math.floor(Math.random() * obj.length)];
};
