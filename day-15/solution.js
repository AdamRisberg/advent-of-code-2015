const input = require("./input");
const cookieBuilder = require("./cookie-builder");
const { parseData, getAllPossibleScores } = cookieBuilder;

const ingredients = parseData(input);
const [part1, part2] = getAllPossibleScores(ingredients, 500);

console.log(`Part 1: ${part1}`);
console.log(`Part 2: ${part2}`);
