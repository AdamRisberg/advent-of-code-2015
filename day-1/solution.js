const input = require("./input");
const apartment = require("./apartment");
const { findFloorNumber, findPositionResultingInFloor } = apartment;

const part1 = findFloorNumber(input);
console.log(`Part 1: ${part1}`);

const part2 = findPositionResultingInFloor(input, -1);
console.log(`Part 2: ${part2}`);
