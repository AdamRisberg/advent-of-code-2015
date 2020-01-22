const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.resolve(__dirname, "raw-input.txt"), "UTF-8")
  .split("\r\n")
  .filter(Boolean);

const replacements = input
  .slice(0, input.length - 1)
  .map(item => item.split(" => "));
const molecule = input[input.length - 1];

module.exports = {
  replacements,
  molecule
};
