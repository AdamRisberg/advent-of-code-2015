const input = require("./input");
const findSmallestEntanglement = require("./smallest-entanglement");

const part1 = findSmallestEntanglement(input, 3);
console.log(`Part 1: ${part1}`);

const part2 = findSmallestEntanglement(input, 4);
console.log(`Part 2: ${part2}`);
