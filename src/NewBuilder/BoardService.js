import { TFT_BASE } from "../config";
import { activeTraits } from "../set4update/set4";

export const createBoard = async (payload, history) => {
  const token = window.localStorage.getItem("TOKEN_KEY");
  const response = await fetch(`${TFT_BASE}/boards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

export const parseTeam = (data) => {
  return Object.values(data.board).filter((e) => e);
};

export const parseCover = (data) => {
  let obj = Object.values(data.board).filter((e) => e && e.items);
  return obj[Math.floor(Math.random() * obj.length)];
};

export const orderedSynergies = (obj) => {
  let result = [];
  Object.keys(obj).forEach((trait) => {
    result.push(getInfo(trait, obj[trait]));
  });
  return result.sort((a, b) => b.index - a.index);
};

const getInfo = (trait, active) => {
  let tier = activeTraits[trait];
  let maxIdx = tier.length - 1;
  for (let i = maxIdx; i > -1; i--) {
    if (active >= tier[i]) {
      console.log(i, maxIdx);
      return {
        trait: trait,
        index: parseFloat((i + 1) / (maxIdx + 1)),
        activated: tier[i],
      };
    }
  }
};
