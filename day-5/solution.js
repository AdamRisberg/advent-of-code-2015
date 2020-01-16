const input = require("./input");
const niceString = require("./nice-string");
const { countNiceStrings, testNiceString, testNiceStringBetter } = niceString;

const part1 = countNiceStrings(input, testNiceString);
console.log(part1);
const part2 = countNiceStrings(input, testNiceStringBetter);
console.log(part2);
