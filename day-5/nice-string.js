function countNiceStrings(array, testFunc) {
  return array.reduce((total, next) => {
    return total + testFunc(next);
  }, 0);
}

function testNiceStringBetter(str) {
  return hasTwoPairs(str) && hasPairWithOneInbetween(str);
}

function hasPairWithOneInbetween(str) {
  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === str[i + 2]) {
      return true;
    }
  }
  return false;
}

function hasTwoPairs(str) {
  const pairs = {};

  for (let i = 0; i < str.length - 1; i++) {
    const curPair = str[i] + str[i + 1];

    if (!pairs[curPair]) {
      pairs[curPair] = [i, i + 1];
    } else if (!pairs[curPair].includes(i) && !pairs[curPair].includes(i + 1)) {
      return true;
    }
  }
  return false;
}

function testNiceString(str) {
  const vowels = str.replace(/[^aeiou]/g, "");
  const notAllowed = str.replace(/ab|cd|pq|xy/g, "");
  const hasThreeVowels = vowels.length >= 3;
  const hasNotAllowed = notAllowed.length !== str.length;
  const pair = hasPair(str);

  return hasThreeVowels && !hasNotAllowed && pair;
}

function hasPair(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}

module.exports = {
  countNiceStrings,
  testNiceString,
  testNiceStringBetter
};
