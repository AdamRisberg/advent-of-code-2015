const findHashWithLeadingZeroes = require("./findHashWithLeadingZeroes");
const secretKey = "yzbqklnj";

const part1 = findHashWithLeadingZeroes(secretKey, 5);
const part2 = findHashWithLeadingZeroes(secretKey, 6);

console.log(`Part 1: ${part1}`);
console.log(`Part 2: ${part2}`);
