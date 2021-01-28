export const champions = require("./champions.json");
export const items = require("./items.json");
export const traits = require("./traits.json");
export const activeTraits = {
  Set4_Adept: [2, 3, 4],
  Set4_Assassin: [2, 4, 6],
  Set4_Blacksmith: [1],
  Set4_Brawler: [2, 4, 6, 8],
  Cultist: [3, 6, 9],
  Set4_Daredevil: [1],
  Divine: [2, 4, 6, 8],
  Set4_Dragonsoul: [3, 6, 9],
  Duelist: [2, 4, 6, 8],
  Set4_Elderwood: [3, 6, 9],
  Emperor: [1],
  Set4_Enlightened: [2, 4, 6],
  Set4_Executioner: [2, 3, 4],
  Set4_Exile: [1, 2],
  Set4_Fabled: [3],
  Fortune: [3, 6],
  Keeper: [2, 4, 6],
  Set4_Mage: [3, 5, 7],
  Set4_Mystic: [2, 4, 6],
  Set4_Ninja: [1, 4],
  Sharpshooter: [2, 4, 6],
  Set4_Slayer: [3, 6],
  Set4_Spirit: [2, 4],
  Set4_Syphoner: [2, 4],
  Boss: [1],
  Set4_Vanguard: [2, 4, 6, 8],
  Warlord: [3, 6, 9],
};

export const itemRef = {
  DB: {
    name: "Deathblade",
    description:
      "Contributing to a kill grants the holder addtional Attack Damage for the rest of combat.",
    image: "11.png",
  },
  GS: {
    name: "Giant Slayer",
    description:
      "The holder's spells and basic attacks do bonus damage. If the target has more health, the bonus damage increases.",
    image: "12.png",
  },
  GB: {
    name: "Hextech Gunblade",
    description:
      "The holder's spells heal them for a percentage of the damage dealt. Excess healing fuels a shield that protects the holder.",
    image: "13.png",
  },
  Shojin: {
    name: "Spear of Shojin",
    description: "The holder's basic attacks restore Mana on-hit.",
    image: "14.png",
  },
  GA: {
    name: "Guardian Angel",
    description:
      "Prevents the wearer's first death, reviving them after a short delay and sheding all negative effects.",
    image: "15.png",
  },
  BT: {
    name: "Bloodthirster",
    description:
      "Basic attacks heal the holder for a percentage of the damage dealt.",
    image: "16.png",
  },
  Zekes: {
    name: "Zeke's Herald",
    description:
      "When combat begins, the wearer and nearby allies in the same row gain Attack Speed for the rest of combat.",
    image: "17.png",
  },
  SotD: {
    name: "Sword of the Divine",
    description: "The holder gains the Divine trait.",
    image: "18.png",
  },
  IE: {
    name: "Infinity Edge",
    description:
      "Grants Critical Strike Chance. Each point of Critical Strike Chance above 100% becomes bonus Critical Strike Damage.",
    image: "19.png",
  },
  RFC: {
    name: "Rapid Firecannon",
    description:
      "The holder gains Attack Range, and their Basic Attacks can't miss.",
    image: "22.png",
  },
  GRB: {
    name: "Guinsoo's Rageblade",
    description:
      "Basic Attacks grant bonus Attack Speed for the rest of combat.",
    image: "23.png",
  },
  Statikk: {
    name: "Statikk Shiv",
    description:
      "Every third Basic Attack from the wearer deals Magic Damage to nearby enemies, and true damage if they are shielded or crowd-controlled.",
    image: "24.png",
  },
  TR: {
    name: "Titan's Resolve",
    description:
      "When the wearer takes damage or inflicts a critical hit, they gain a stacking damage bonus. The damage stacks up to a limit, at which point the wearer gains Armor and Magic Resistance, and increases in size.",
    image: "25.png",
  },
  RH: {
    name: "Runaan's Hurricane",
    description:
      "Basic Attacks fire a bolt at another nearby enemy, dealing a percentage of the wearer's Attack Damage and applying on-hit effects. These bolts can critical strike.",
    image: "26.png",
  },
  ZzR: {
    name: "Zz'Rot Portal",
    description:
      "When the wearer dies, a Construct arises to continue the fight.",
    image: "27.png",
  },
  DZ: {
    name: "Duelist's Zeal",
    description: "The holder gains the Duelist trait.",
    image: "28.png",
  },
  LW: {
    name: "Last Whisper",
    description:
      "When the wearer inflicts a critical hit, the target's Armor is reduced for a number of seconds.",
    image: "29.png",
  },
  DCap: {
    name: "Rabadon's Deathcap",
    description: "The holder gains additional Spell Power.",
    image: "33.png",
  },
  Luden: {
    name: "Luden's Echo",
    description:
      "When the holder casts their spell, the first target dealt magic damage and to nearby enemies are dealt additional magic damage.",
    image: "34.png",
  },
  Locket: {
    name: "Locket of the Iron Solari",
    description:
      "When combat begins, the wearer and nearby allies in the same row gain a shield that blocks damage for several seconds.",
    image: "35.png",
  },
  IS: {
    name: "Ionic Spark",
    description:
      "Nearby enemies have their Magic Resist reduced. When they cast a spell, they are zapped taking magic damage equal to a percentage of their max Mana.",
    image: "36.png",
  },
  Morello: {
    name: "Morellonomicon",
    description:
      "When the holder deals damage with their spell, they burn the target, dealing a percentage of the target's maximum Health as true damage over several seconds, and reducing healing by a percentage for the duration of the burn.",
    image: "37.png",
  },
  MoD: {
    name: "Aspect of Dusk",
    description: "The holder gains the Dusk trait.",
    image: "38.png",
  },
  JG: {
    name: "Jeweled Gauntlet",
    description:
      "The holder's spells can cause critical hits, and the holder gains bonus Critical Strike Damage.",
    image: "39.png",
  },
  Blue: {
    name: "Blue Buff",
    description: "After casting their spell, the wearer gains Mana.",
    image: "44.png",
  },
  FH: {
    name: "Frozen Heart",
    description:
      "Reduces the Attack Speed of nearby enemies. Each Frozen Heart a champion carries beyond the first increases the radius of this effect.",
    image: "45.png",
  },
  CoP: {
    name: "Chalice of Power",
    description:
      "When combat begins, the wearer and all nearby allies in the same row gain Spell Power for the rest of combat.",
    image: "46.png",
  },
  Rdmp: {
    name: "Redemption",
    description: "When the wearer dies, allies are healed.",
    image: "47.png",
  },
  MC: {
    name: "Mage's Hat",
    description: "The holder gains the Mage trait.",
    image: "48.png",
  },
  HoJ: {
    name: "Hand Of Justice",
    description:
      "At the beginning of each planning phase, the wearer's basic attacks and spells deal additional damage or heal for a percentage of damage dealt.",
    image: "49.png",
  },
  BV: {
    name: "Bramble Vest",
    description:
      "Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal magic damage to all nearby enemies.",
    image: "55.png",
  },
  GaSt: {
    name: "Gargoyle Stoneplate",
    description:
      "The holder gains Armor and Magic Resist for each enemy targeting them.",
    image: "56.png",
  },
  SC: {
    name: "Sunfire Cape",
    description:
      "At start of combat, and every couple seconds thereafter, a random nearby enemyis burned for a percentage of their maximum health. Any healing they receive is reduced.",
    image: "57.png",
  },
  VC: {
    name: "Vanguard's Cuirass",
    description: "The holder gains the Vanguard trait.",
    image: "58.png",
  },
  Shroud: {
    name: "Shroud of Stillness",
    description:
      "When combat begins, shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana until they cast.",
    image: "59.png",
  },
  DClaw: {
    name: "Dragon's Claw",
    description: "Reduces incoming magic damage.",
    image: "66.png",
  },
  ZE: {
    name: "Zephyr",
    description:
      "When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for several seconds.",
    image: "67.png",
  },
  EH: {
    name: "Elderwood Sprout",
    description: "The holder gains the Elderwood trait.",
    image: "68.png",
  },
  QSS: {
    name: "Quicksilver",
    description:
      "The wearer is immune to crowd control for the first several seconds of combat.",
    image: "69.png",
  },
  WM: {
    name: "Warmog's Armor",
    description: "Grants bonus Health.",
    image: "77.png",
  },
  WB: {
    name: "Warlord's Banner",
    description: "The wearer gains the Warlord trait.",
    image: "78.png",
  },
  TClaw: {
    name: "Trap Claw",
    description:
      "Blocks the first enemy spell that hits the wearer, and stuns the spell's caster for several seconds.",
    image: "79.png",
  },
  FON: { name: "Force of Nature", description: "", image: "88.png" },
  YG: {
    name: "Youmuu's Ghostblade",
    description: "The wearer gains the Assassin trait.",
    image: "89.png",
  },
  TG: {
    name: "Thief's Gloves",
    description:
      "At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level.",
    image: "99.png",
  },
};

export const champRef = {
  TFT4_Aatrox: {
    name: "Aatrox",
    cost: 4,
    traits: ["Cultist", "Set4_Vanguard"],
  },
  TFT4_Akali: {
    name: "Akali",
    cost: 3,
    traits: ["Set4_Ninja", "Set4_Assassin"],
  },
  TFT4_Annie: { name: "Annie", cost: 2, traits: ["Fortune", "Set4_Mage"] },
  TFT4_AurelionSol: {
    name: "Aurelion Sol",
    cost: 4,
    traits: ["Set4_Dragonsoul", "Set4_Mage"],
  },
  TFT4_Azir: {
    name: "Azir",
    cost: 5,
    traits: ["Warlord", "Keeper", "Emperor"],
  },
  TFT4_Brand: {
    name: "Brand",
    cost: 1,
    traits: ["Set4_Dragonsoul", "Set4_Mage"],
  },
  TFT4_Braum: {
    name: "Braum",
    cost: 2,
    traits: ["Set4_Dragonsoul", "Set4_Vanguard"],
  },
  TFT4_ChoGath: {
    name: "Cho'Gath",
    cost: 4,
    traits: ["Set4_Fabled", "Set4_Brawler"],
  },
  TFT4_Darius: { name: "Darius", cost: 3, traits: ["Fortune", "Set4_Slayer"] },
  TFT4_Diana: {
    name: "Diana",
    cost: 1,
    traits: ["Set4_Spirit", "Set4_Assassin"],
  },
  TFT4_Elise: { name: "Elise", cost: 1, traits: ["Cultist", "Keeper"] },
  TFT4_Fiora: {
    name: "Fiora",
    cost: 1,
    traits: ["Set4_Enlightened", "Duelist"],
  },
  TFT4_Garen: { name: "Garen", cost: 1, traits: ["Warlord", "Set4_Vanguard"] },
  TFT4_Irelia: {
    name: "Irelia",
    cost: 3,
    traits: ["Set4_Enlightened", "Divine", "Set4_Adept"],
  },
  TFT4_Janna: {
    name: "Janna",
    cost: 2,
    traits: ["Set4_Enlightened", "Set4_Mystic"],
  },
  TFT4_JarvanIV: { name: "Jarvan IV", cost: 2, traits: ["Warlord", "Keeper"] },
  TFT4_Jax: { name: "Jax", cost: 2, traits: ["Divine", "Duelist"] },
  TFT4_Kalista: { name: "Kalista", cost: 3, traits: ["Cultist", "Duelist"] },
  TFT4_Katarina: {
    name: "Katarina",
    cost: 3,
    traits: ["Warlord", "Fortune", "Set4_Assassin"],
  },
  TFT4_Kayle: {
    name: "Kayle",
    cost: 4,
    traits: ["Divine", "Set4_Executioner"],
  },
  TFT4_Kennen: { name: "Kennen", cost: 3, traits: ["Set4_Ninja", "Keeper"] },
  TFT4_Kindred: {
    name: "Kindred",
    cost: 3,
    traits: ["Set4_Spirit", "Set4_Executioner"],
  },
  TFT4_LeeSin: { name: "Lee Sin", cost: 5, traits: ["Divine", "Duelist"] },
  TFT4_Lulu: { name: "Lulu", cost: 2, traits: ["Set4_Elderwood", "Set4_Mage"] },
  TFT4_Maokai: {
    name: "Maokai",
    cost: 1,
    traits: ["Set4_Elderwood", "Set4_Brawler"],
  },
  TFT4_Morgana: {
    name: "Morgana",
    cost: 4,
    traits: ["Set4_Enlightened", "Set4_Syphoner"],
  },
  TFT4_Nasus: { name: "Nasus", cost: 1, traits: ["Divine", "Set4_Syphoner"] },
  TFT4_Nautilus: {
    name: "Nautilus",
    cost: 2,
    traits: ["Set4_Fabled", "Set4_Vanguard"],
  },
  TFT4_Neeko: {
    name: "Neeko",
    cost: 3,
    traits: ["Set4_Fabled", "Set4_Mystic"],
  },
  TFT4_Nidalee: {
    name: "Nidalee",
    cost: 1,
    traits: ["Warlord", "Sharpshooter"],
  },
  TFT4_Nunu: {
    name: "Nunu & Willump",
    cost: 3,
    traits: ["Set4_Elderwood", "Set4_Brawler"],
  },
  TFT4_Olaf: {
    name: "Olaf",
    cost: 4,
    traits: ["Set4_Dragonsoul", "Set4_Slayer"],
  },
  TFT4_Ornn: {
    name: "Ornn",
    cost: 5,
    traits: ["Set4_Elderwood", "Set4_Vanguard", "Set4_Blacksmith"],
  },
  TFT4_Pyke: {
    name: "Pyke",
    cost: 2,
    traits: ["Cultist", "Set4_Assassin", "Set4_Slayer"],
  },
  TFT4_Rakan: { name: "Rakan", cost: 2, traits: ["Set4_Elderwood", "Keeper"] },
  TFT4_Samira: {
    name: "Samira",
    cost: 5,
    traits: ["Set4_Daredevil", "Sharpshooter", "Set4_Slayer"],
  },
  TFT4_Sejuani: {
    name: "Sejuani",
    cost: 4,
    traits: ["Fortune", "Set4_Vanguard"],
  },
  TFT4_Sett: { name: "Sett", cost: 5, traits: ["Boss", "Set4_Brawler"] },
  TFT4_Shen: {
    name: "Shen",
    cost: 4,
    traits: ["Set4_Ninja", "Set4_Adept", "Set4_Mystic"],
  },
  TFT4_Shyvana: {
    name: "Shyvana",
    cost: 3,
    traits: ["Set4_Dragonsoul", "Set4_Brawler"],
  },
  TFT4_Sivir: { name: "Sivir", cost: 3, traits: ["Cultist", "Sharpshooter"] },
  TFT4_Swain: {
    name: "Swain",
    cost: 5,
    traits: ["Set4_Dragonsoul", "Set4_Syphoner"],
  },
  TFT4_TahmKench: {
    name: "Tahm Kench",
    cost: 1,
    traits: ["Fortune", "Set4_Brawler"],
  },
  TFT4_Talon: {
    name: "Talon",
    cost: 4,
    traits: ["Set4_Enlightened", "Set4_Assassin"],
  },
  TFT4_Teemo: {
    name: "Teemo",
    cost: 2,
    traits: ["Set4_Spirit", "Sharpshooter"],
  },
  TFT4_Tristana: {
    name: "Tristana",
    cost: 1,
    traits: ["Set4_Dragonsoul", "Sharpshooter"],
  },
  TFT4_Tryndamere: {
    name: "Tryndamere",
    cost: 4,
    traits: ["Warlord", "Set4_Slayer", "Duelist"],
  },
  TFT4_TwistedFate: {
    name: "Twisted Fate",
    cost: 1,
    traits: ["Cultist", "Set4_Mage"],
  },
  TFT4_Veigar: {
    name: "Veigar",
    cost: 3,
    traits: ["Set4_Elderwood", "Set4_Mage"],
  },
  TFT4_Vi: { name: "Vi", cost: 2, traits: ["Warlord", "Set4_Brawler"] },
  TFT4_Vladimir: {
    name: "Vladimir",
    cost: 2,
    traits: ["Cultist", "Set4_Syphoner"],
  },
  TFT4_Wukong: { name: "Wukong", cost: 1, traits: ["Divine", "Set4_Vanguard"] },
  TFT4_Xayah: {
    name: "Xayah",
    cost: 4,
    traits: ["Set4_Elderwood", "Set4_Executioner", "Keeper"],
  },
  TFT4_Yasuo: { name: "Yasuo", cost: 1, traits: ["Set4_Exile", "Duelist"] },
  TFT4_Yone: { name: "Yone", cost: 5, traits: ["Set4_Exile", "Set4_Adept"] },
  TFT4_Yuumi: {
    name: "Yuumi",
    cost: 3,
    traits: ["Set4_Spirit", "Set4_Mystic"],
  },
  TFT4_Zed: { name: "Zed", cost: 2, traits: ["Set4_Ninja", "Set4_Slayer"] },
  TFT4_Zilean: { name: "Zilean", cost: 5, traits: ["Cultist", "Set4_Mystic"] },
};
