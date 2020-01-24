const generateCode = require("./code-generation");

const targetRow = 2947;
const targetColumn = 3029;
const firstCode = 20151125;

const part1 = generateCode(firstCode, targetRow, targetColumn);
console.log(`Part 1: ${part1}`);
