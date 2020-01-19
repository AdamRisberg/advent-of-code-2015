const path = require("path");
const fs = require("fs");

const input = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "raw-input.txt"), "UTF-8")
);

module.exports = input;
