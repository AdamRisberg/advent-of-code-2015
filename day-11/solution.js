const findNextPassword = require("./find-next-password");

const part1 = findNextPassword("hepxcrrq");
console.log(`Part 1: ${part1}`);

const part2 = findNextPassword(part1);
console.log(`Part 2: ${part2}`);
