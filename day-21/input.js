const bossStats = {
  hitPoints: 100,
  damage: 8,
  armor: 2
};

const playerStats = {
  hitPoints: 100,
  damage: 0,
  armor: 0
};

const store = {
  weapons: [
    {
      name: "Dagger",
      cost: 8,
      damage: 4,
      armor: 0
    },
    {
      name: "Shortsword",
      cost: 10,
      damage: 5,
      armor: 0
    },
    {
      name: "Warhammer",
      cost: 25,
      damage: 6,
      armor: 0
    },
    {
      name: "Longsword",
      cost: 40,
      damage: 7,
      armor: 0
    },
    {
      name: "Greataxe",
      cost: 74,
      damage: 8,
      armor: 0
    }
  ],
  armor: [
    {
      name: "none",
      cost: 0,
      damage: 0,
      armor: 0
    },
    {
      name: "Leather",
      cost: 13,
      damage: 0,
      armor: 1
    },
    {
      name: "Chainmail",
      cost: 31,
      damage: 0,
      armor: 2
    },
    {
      name: "Splintmail",
      cost: 53,
      damage: 0,
      armor: 3
    },
    {
      name: "Bandedmail",
      cost: 75,
      damage: 0,
      armor: 4
    },
    {
      name: "Platemail",
      cost: 102,
      damage: 0,
      armor: 5
    }
  ],
  rings: [
    {
      name: "none",
      cost: 0,
      damage: 0,
      armor: 0
    },
    {
      name: "Damage +1",
      cost: 25,
      damage: 1,
      armor: 0
    },
    {
      name: "Damage +2",
      cost: 50,
      damage: 2,
      armor: 0
    },
    {
      name: "Damage +3",
      cost: 100,
      damage: 3,
      armor: 0
    },
    {
      name: "none",
      cost: 0,
      damage: 0,
      armor: 0
    },
    {
      name: "Defense +1",
      cost: 20,
      damage: 0,
      armor: 1
    },
    {
      name: "Defense +2",
      cost: 40,
      damage: 0,
      armor: 2
    },
    {
      name: "Defense +3",
      cost: 80,
      damage: 0,
      armor: 3
    }
  ]
};

module.exports = {
  bossStats,
  playerStats,
  store
};
