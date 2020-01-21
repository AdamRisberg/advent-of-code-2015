const input = require("./input");
const containerCombinations = require("./container-combinations");
const {
  findFillCombinations,
  findMinimumCountCombinations
} = containerCombinations;

const combinations = findFillCombinations(input, 150);
const part1 = combinations.length;
console.log(`Part 1: ${part1}`);

const part2 = findMinimumCountCombinations(combinations);
console.log(`Part 2: ${part2}`);
