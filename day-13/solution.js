const input = require("./input");
const seatingPlanner = require("./seating-planner");
const {
  createRelationships,
  findMaxHappiness,
  addNeutralPerson
} = seatingPlanner;

const relationships = createRelationships(input);
const part1 = findMaxHappiness(relationships);
console.log(`Part 1: ${part1}`);

addNeutralPerson("Adam", relationships);
const part2 = findMaxHappiness(relationships);
console.log(`Part 2: ${part2}`);
