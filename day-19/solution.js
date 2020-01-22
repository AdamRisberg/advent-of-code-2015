const input = require("./input");
const fabricator = require("./fabricator");
const { replacements, molecule } = input;
const { generateMolecules, findMinStepsToFabricate } = fabricator;

const distinctMolecules = generateMolecules(replacements, molecule);
const part1 = distinctMolecules.size;
console.log(`Part 1: ${part1}`);

const part2 = findMinStepsToFabricate(replacements, molecule);
console.log(`Part 2: ${part2}`);
