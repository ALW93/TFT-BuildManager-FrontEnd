const itemRef = {
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

export default itemRef;
