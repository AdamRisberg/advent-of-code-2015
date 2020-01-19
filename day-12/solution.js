const input = require("./input");
const numberFinder = require("./number-finder");
const { findAllNumbers, filterObj } = numberFinder;

const part1 = findAllNumbers(input);
console.log(`Part 1: ${part1}`);

const part2 = findAllNumbers(input, filterObj);
console.log(`Part 2: ${part2}`);
