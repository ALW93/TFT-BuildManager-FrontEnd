const items = [
  {
    id: 1,
    name: "B.F. Sword",
    acronym: "BF",
    description: "Gain Attack Damage.",
  },
  {
    id: 2,
    name: "Recurve Bow",
    acronym: "Bow",
    description: "Gain Attack Speed.",
  },
  {
    id: 3,
    name: "Needlessly Large Rod",
    acronym: "Rod",
    description: "Gain Spell Power.",
  },
  {
    id: 4,
    name: "Tear of the Goddess",
    acronym: "Tear",
    description: "Gain Mana.",
  },
  {
    id: 5,
    name: "Chain Vest",
    acronym: "Vest",
    description: "Gain Armor.",
  },
  {
    id: 6,
    name: "Negatron Cloak",
    acronym: "Cloak",
    description: "Gain Magic Resist.",
  },
  {
    id: 7,
    name: "Giant's Belt",
    acronym: "Belt",
    description: "Gain Health.",
  },
  {
    id: 8,
    name: "Spatula",
    acronym: "Spat",
    description: "It must do something...",
  },
  {
    id: 9,
    name: "Sparring Gloves",
    acronym: "Gloves",
    description: "Gain Critical Strike Chance and Dodge Chance.",
  },
  {
    id: 11,
    name: "Deathblade",
    acronym: "DB",
    parts: ["BF", "BF"],
    description:
      "Contributing to a kill grants the holder addtional Attack Damage for the rest of combat.",
  },
  {
    id: 12,
    name: "Giant Slayer",
    acronym: "GS",
    parts: ["BF", "Bow"],
    description:
      "The holder's spells and basic attacks do bonus damage. If the target has more health, the bonus damage increases.",
  },
  {
    id: 13,
    name: "Hextech Gunblade",
    acronym: "GB",
    parts: ["BF", "Rod"],
    description:
      "The holder's spells heal them for a percentage of the damage dealt. Excess healing fuels a shield that protects the holder.",
  },
  {
    id: 14,
    name: "Spear of Shojin",
    acronym: "Shojin",
    parts: ["BF", "Tear"],
    description: "The holder's basic attacks restore Mana on-hit.",
  },
  {
    id: 15,
    name: "Guardian Angel",
    acronym: "GA",
    parts: ["BF", "Vest"],
    description:
      "Prevents the wearer's first death, reviving them after a short delay and sheding all negative effects.",
  },
  {
    id: 16,
    name: "Bloodthirster",
    acronym: "BT",
    parts: ["BF", "Cloak"],
    description:
      "Basic attacks heal the holder for a percentage of the damage dealt.",
  },
  {
    id: 17,
    name: "Zeke's Herald",
    acronym: "Zekes",
    parts: ["BF", "Belt"],
    description:
      "When combat begins, the wearer and nearby allies in the same row gain Attack Speed for the rest of combat.",
  },
  {
    id: 18,
    name: "Sword of the Divine",
    acronym: "SotD",
    parts: ["BF", "Spat"],
    description: "The holder gains the Divine trait.",
  },
  {
    id: 19,
    name: "Infinity Edge",
    acronym: "IE",
    parts: ["BF", "Gloves"],
    description:
      "Grants Critical Strike Chance. Each point of Critical Strike Chance above 100% becomes bonus Critical Strike Damage.",
  },
  {
    id: 22,
    name: "Rapid Firecannon",
    acronym: "RFC",
    parts: ["Bow", "Bow"],
    description:
      "The holder gains Attack Range, and their Basic Attacks can't miss.",
  },
  {
    id: 23,
    name: "Guinsoo's Rageblade",
    acronym: "GRB",
    parts: ["Bow", "Rod"],
    description:
      "Basic Attacks grant bonus Attack Speed for the rest of combat.",
  },
  {
    id: 24,
    name: "Statikk Shiv",
    acronym: "Statikk",
    parts: ["Bow", "Tear"],
    description:
      "Every third Basic Attack from the wearer deals Magic Damage to nearby enemies, and true damage if they are shielded or crowd-controlled.",
  },
  {
    id: 25,
    name: "Titan's Resolve",
    acronym: "TR",
    parts: ["Bow", "Vest"],
    description:
      "When the wearer takes damage or inflicts a critical hit, they gain a stacking damage bonus. The damage stacks up to a limit, at which point the wearer gains Armor and Magic Resistance, and increases in size.",
  },
  {
    id: 26,
    name: "Runaan's Hurricane",
    acronym: "RH",
    parts: ["Bow", "Cloak"],
    description:
      "Basic Attacks fire a bolt at another nearby enemy, dealing a percentage of the wearer's Attack Damage and applying on-hit effects. These bolts can critical strike.",
  },
  {
    id: 27,
    name: "Zz'Rot Portal",
    acronym: "ZzR",
    parts: ["Bow", "Belt"],
    description:
      "When the wearer dies, a Construct arises to continue the fight.",
  },
  {
    id: 28,
    name: "Duelist's Zeal",
    acronym: "DZ",
    parts: ["Bow", "Spat"],
    description: "The holder gains the Duelist trait.",
  },
  {
    id: 29,
    name: "Last Whisper",
    acronym: "LW",
    parts: ["Bow", "Gloves"],
    description:
      "When the wearer inflicts a critical hit, the target's Armor is reduced for a number of seconds.",
  },
  {
    id: 33,
    name: "Rabadon's Deathcap",
    acronym: "DCap",
    parts: ["Rod", "Rod"],
    description: "The holder gains additional Spell Power.",
  },
  {
    id: 34,
    name: "Luden's Echo",
    acronym: "Luden",
    parts: ["Rod", "Tear"],
    description:
      "When the holder casts their spell, the first target dealt magic damage and to nearby enemies are dealt additional magic damage.",
  },
  {
    id: 35,
    name: "Locket of the Iron Solari",
    acronym: "Locket",
    parts: ["Rod", "Vest"],
    description:
      "When combat begins, the wearer and nearby allies in the same row gain a shield that blocks damage for several seconds.",
  },
  {
    id: 36,
    name: "Ionic Spark",
    acronym: "IS",
    parts: ["Rod", "Cloak"],
    description:
      "Nearby enemies have their Magic Resist reduced. When they cast a spell, they are zapped taking magic damage equal to a percentage of their max Mana.",
  },
  {
    id: 37,
    name: "Morellonomicon",
    acronym: "Morello",
    parts: ["Rod", "Belt"],
    description:
      "When the holder deals damage with their spell, they burn the target, dealing a percentage of the target's maximum Health as true damage over several seconds, and reducing healing by a percentage for the duration of the burn.",
  },
  {
    id: 38,
    name: "Aspect of Dusk",
    acronym: "MoD",
    parts: ["Rod", "Spat"],
    description: "The holder gains the Dusk trait.",
  },
  {
    id: 39,
    name: "Jeweled Gauntlet",
    acronym: "JG",
    parts: ["Rod", "Gloves"],
    description:
      "The holder's spells can cause critical hits, and the holder gains bonus Critical Strike Damage.",
  },
  {
    id: 44,
    name: "Blue Buff",
    acronym: "Blue",
    parts: ["Tear", "Tear"],
    description: "After casting their spell, the wearer gains Mana.",
  },
  {
    id: 45,
    name: "Frozen Heart",
    acronym: "FH",
    parts: ["Tear", "Vest"],
    description:
      "Reduces the Attack Speed of nearby enemies. Each Frozen Heart a champion carries beyond the first increases the radius of this effect.",
  },
  {
    id: 46,
    name: "Chalice of Power",
    acronym: "CoP",
    parts: ["Tear", "Cloak"],
    description:
      "When combat begins, the wearer and all nearby allies in the same row gain Spell Power for the rest of combat.",
  },
  {
    id: 47,
    name: "Redemption",
    acronym: "Rdmp",
    parts: ["Tear", "Belt"],
    description: "When the wearer dies, allies are healed.",
  },
  {
    id: 48,
    name: "Mage's Hat",
    acronym: "MC",
    parts: ["Tear", "Spat"],
    description: "The holder gains the Mage trait.",
  },
  {
    id: 49,
    name: "Hand Of Justice",
    acronym: "HoJ",
    parts: ["Tear", "Gloves"],
    description:
      "At the beginning of each planning phase, the wearer's basic attacks and spells deal additional damage or heal for a percentage of damage dealt.",
  },
  {
    id: 55,
    name: "Bramble Vest",
    acronym: "BV",
    parts: ["Vest", "Vest"],
    description:
      "Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal magic damage to all nearby enemies.",
  },
  {
    id: 56,
    name: "Gargoyle Stoneplate",
    acronym: "GaSt",
    parts: ["Vest", "Cloak"],
    description:
      "The holder gains Armor and Magic Resist for each enemy targeting them.",
  },
  {
    id: 57,
    name: "Sunfire Cape",
    acronym: "SC",
    parts: ["Vest", "Belt"],
    description:
      "At start of combat, and every couple seconds thereafter, a random nearby enemyis burned for a percentage of their maximum health. Any healing they receive is reduced.",
  },
  {
    id: 58,
    name: "Vanguard's Cuirass",
    acronym: "VC",
    parts: ["Vest", "Spat"],
    description: "The holder gains the Vanguard trait.",
  },
  {
    id: 59,
    name: "Shroud of Stillness",
    acronym: "Shroud",
    parts: ["Vest", "Gloves"],
    description:
      "When combat begins, shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana until they cast.",
  },
  {
    id: 66,
    name: "Dragon's Claw",
    acronym: "DClaw",
    parts: ["Cloak", "Cloak"],
    description: "Reduces incoming magic damage.",
  },
  {
    id: 67,
    name: "Zephyr",
    acronym: "ZE",
    parts: ["Cloak", "Belt"],
    description:
      "When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for several seconds.",
  },
  {
    id: 68,
    name: "Elderwood Sprout",
    acronym: "EH",
    parts: ["Cloak", "Spat"],
    description: "The holder gains the Elderwood trait.",
  },
  {
    id: 69,
    name: "Quicksilver",
    acronym: "QSS",
    parts: ["Cloak", "Gloves"],
    description:
      "The wearer is immune to crowd control for the first several seconds of combat.",
  },
  {
    id: 77,
    name: "Warmog's Armor",
    acronym: "WM",
    parts: ["Belt", "Belt"],
    description: "Grants bonus Health.",
  },
  {
    id: 78,
    name: "Warlord's Banner",
    acronym: "WB",
    parts: ["Belt", "Spat"],
    description: "The wearer gains the Warlord trait.",
  },
  {
    id: 79,
    name: "Trap Claw",
    acronym: "TClaw",
    parts: ["Belt", "Gloves"],
    description:
      "Blocks the first enemy spell that hits the wearer, and stuns the spell's caster for several seconds.",
  },
  {
    id: 88,
    name: "Force of Nature",
    acronym: "FON",
    parts: ["Spat", "Spat"],
    description: "",
  },
  {
    id: 89,
    name: "Youmuu's Ghostblade",
    acronym: "YG",
    parts: ["Spat", "Gloves"],
    description: "The wearer gains the Assassin trait.",
  },
  {
    id: 99,
    name: "Thief's Gloves",
    acronym: "TG",
    parts: ["Gloves", "Gloves"],
    description:
      "At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level.",
  },
];

export default items;
