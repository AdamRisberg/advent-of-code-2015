const md5 = require("md5");

function findHashWithLeadingZeroes(key, numOfZeroes) {
  let counter = 0;

  while (!hasNLeadingZeroes(md5(key + counter), numOfZeroes)) {
    counter++;
  }
  return counter;
}

function hasNLeadingZeroes(str, n) {
  return str.slice(0, n) === "0".repeat(n);
}

module.exports = findHashWithLeadingZeroes;
