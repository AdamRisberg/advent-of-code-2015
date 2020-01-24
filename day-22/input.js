const spells = [
  {
    name: "Magic Missile",
    cost: 53,
    damage: 4,
    heal: 0,
    armor: 0,
    mana: 0,
    instant: true,
    lasts: 0
  },
  {
    name: "Drain",
    cost: 73,
    damage: 2,
    heal: 2,
    armor: 0,
    mana: 0,
    instant: true,
    lasts: 0
  },
  {
    name: "Shield",
    cost: 113,
    damage: 0,
    heal: 0,
    armor: 7,
    mana: 0,
    instant: false,
    lasts: 6
  },
  {
    name: "Poison",
    cost: 173,
    damage: 3,
    heal: 0,
    armor: 0,
    mana: 0,
    instant: false,
    lasts: 6
  },
  {
    name: "Recharge",
    cost: 229,
    damage: 0,
    heal: 0,
    armor: 0,
    mana: 101,
    instant: false,
    lasts: 5
  }
];

const playerStats = {
  health: 50,
  mana: 500
};

const bossStats = {
  health: 51,
  damage: 9
};

module.exports = {
  spells,
  playerStats,
  bossStats
};
