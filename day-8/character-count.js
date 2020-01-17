function countEscapedCharacters(strings) {
  return strings.reduce((total, str) => (total += calcEscapedAmount(str)), 0);
}

function calcEscapedAmount(str) {
  let escapedStr = str.replace(/\\/g, "\\\\");
  escapedStr = escapedStr.replace(/"/g, '\\"');
  escapedStr = `"${escapedStr}"`;

  return escapedStr.length - str.length;
}

function countReducedCharacters(strings) {
  return strings.reduce((total, str) => total + calcReducedAmount(str), 0);
}

function calcReducedAmount(str) {
  let cleanStr = str.replace(/\\x[0-9a-f][0-9a-f]/g, "0");
  cleanStr = cleanStr.replace(/\\"/g, "0");
  cleanStr = cleanStr.replace(/\\\\/g, "0");
  cleanStr = cleanStr.slice(1, cleanStr.length - 1);

  return str.length - cleanStr.length;
}

module.exports = {
  countEscapedCharacters,
  countReducedCharacters
};
