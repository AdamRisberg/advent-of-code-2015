const input = require("./input");
const delivery = require("./delivery");
const { deliver, deliverWithRobot } = delivery;

const part1 = deliver(input);
console.log(`Part 1: ${part1}`);

const part2 = deliverWithRobot(input);
console.log(`Part 2: ${part2}`);
