const lookAndSay = require("./look-and-say");
const input = 1321131112;

const part1 = lookAndSay(input, 40);
console.log(`Part 1: ${part1.length}`);

const part2 = lookAndSay(part1, 10);
console.log(`Part 2: ${part2.length}`);
