const input = require("./input");
const Computer = require("./computer");

const computer = new Computer();
computer.loadProgram(input);
computer.run();

console.log(`Part 1: ${computer.b}`);

computer.loadProgram(input, 1);
computer.run();

console.log(`Part 2: ${computer.b}`);
