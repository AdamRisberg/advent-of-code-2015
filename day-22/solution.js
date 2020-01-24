const input = require("./input");
const Player = require("./player");
const Boss = require("./boss");
const findWinWithLeastCost = require("./battle-simulator");
const { spells, playerStats, bossStats } = input;

const part1 = findWinWithLeastCost(
  new Player(playerStats.health, playerStats.mana),
  new Boss(bossStats.health, bossStats.damage),
  spells
);
console.log(`Part 1: ${part1}`);

const part2 = findWinWithLeastCost(
  new Player(50, 500),
  new Boss(51, 9),
  spells,
  true
);
console.log(`Part 2: ${part2}`);
