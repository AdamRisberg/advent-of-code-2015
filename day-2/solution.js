const input = require("./input");
const presents = require("./presents");
const { calculateTotalWrappingPaper, calculateTotalRibbon } = presents;

const part1 = calculateTotalWrappingPaper(input);
console.log(`Part 1: ${part1}`);

const part2 = calculateTotalRibbon(input);
console.log(`Part 2: ${part2}`);
