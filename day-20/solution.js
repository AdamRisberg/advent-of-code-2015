const firstHouseWithAtLeast = require("./presents");

const input = 29000000;

const part1 = firstHouseWithAtLeast(input);
console.log(`Part 1: ${part1}`);

const part2 = firstHouseWithAtLeast(input, true);
console.log(`Part 2: ${part2}`);
