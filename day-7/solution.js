const input = require("./input");
const runWires = require("./wires");

let wires = runWires([...input]);
const part1 = wires["a"];
console.log(`Part 1: ${part1}`);

const inputCopy = [...input];
inputCopy[334] = `${part1} -> b`;

wires = runWires(inputCopy);
const part2 = wires["a"];
console.log(`Part 2: ${part2}`);
