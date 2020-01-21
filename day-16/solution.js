const input = require("./input");
const sueFinder = require("./sue-finder");
const { parseInfoList, findSue } = sueFinder;

const itemsDetected = {
  children: n => n === 3,
  cats: n => n === 7,
  samoyeds: n => n === 2,
  pomeranians: n => n === 3,
  akitas: n => n === 0,
  vizslas: n => n === 0,
  goldfish: n => n === 5,
  trees: n => n === 3,
  cars: n => n === 2,
  perfumes: n => n === 1
};

const sues = parseInfoList(input);
const part1 = findSue(sues, itemsDetected);
console.log(`Part 1: ${part1}`);

itemsDetected.cats = n => n > 7;
itemsDetected.trees = n => n > 3;
itemsDetected.pomeranians = n => n < 3;
itemsDetected.goldfish = n => n < 5;

const part2 = findSue(sues, itemsDetected);
console.log(`Part 2: ${part2}`);
