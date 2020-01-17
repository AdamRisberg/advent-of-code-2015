const input = require("./input");
const charCount = require("./character-count");
const { countReducedCharacters, countEscapedCharacters } = charCount;

const part1 = countReducedCharacters(input);
console.log(`Part 1: ${part1}`);

const part2 = countEscapedCharacters(input);
console.log(`Part 2: ${part2}`);
