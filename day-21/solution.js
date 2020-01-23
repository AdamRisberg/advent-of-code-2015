const input = require("./input");
const runAllPossibleBattles = require("./battle-simulator");
const { playerStats, bossStats, store } = input;

const results = runAllPossibleBattles(playerStats, bossStats, store);

const part1 = results.wins[0];
console.log(`Part 1: ${part1}`);

const part2 = results.losses[0];
console.log(`Part 2: ${part2}`);
