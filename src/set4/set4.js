export const champions = require("./champions.json");
export const items = require("./items.json");
export const activeTraits = {
  Set4_Adept: [2, 3, 4],
  Set4_Assassin: [2, 4, 6],
  Set4_Brawler: [2, 4, 6, 8],
  Cultist: [3, 6, 9],
  Set4_Dazzler: [2, 4],
  Divine: [2, 4, 6, 8],
  Duelist: [2, 4, 6, 8],
  Dusk: [2, 4, 6],
  Set4_Elderwood: [3, 6, 9],
  Emperor: [1],
  Set4_Enlightened: [2, 4, 6],
  Set4_Exile: [1, 2],
  Fortune: [3, 6],
  Hunter: [2, 3, 4, 5],
  Keeper: [2, 4, 6],
  Set4_Mage: [3, 6, 9],
  Moonlight: [3],
  Set4_Mystic: [2, 4, 6],
  Set4_Ninja: [1, 4],
  Set4_Shade: [2, 3, 4],
  Sharpshooter: [2, 4, 6],
  Set4_Spirit: [2, 4],
  Boss: [1],
  Set4_Tormented: [1],
  Set4_Vanguard: [2, 4, 6],
  Warlord: [3, 6, 9],
};

export const traits = require("./traits.json");

const actives = () => {
  let obj = {};
  traits.map((e) => {
    let inner = [];
    e.sets.forEach((i) => {
      inner.push(i.min);
    });
    return (obj[e.key] = inner);
  });
  console.log(obj);
};
