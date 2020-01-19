const charLookup = {
  a: "b",
  b: "c",
  c: "d",
  d: "e",
  e: "f",
  f: "g",
  g: "h",
  h: "i",
  i: "j",
  j: "k",
  k: "l",
  l: "m",
  m: "n",
  n: "o",
  o: "p",
  p: "q",
  q: "r",
  r: "s",
  s: "t",
  t: "u",
  u: "v",
  v: "w",
  w: "x",
  x: "y",
  y: "z",
  z: "a"
};

function findNextPassword(str) {
  do {
    str = incrementString(str);
  } while (!testPassword(str));

  return str;
}

function testPassword(str) {
  return testStraight(str) && !testInvalidChars(str) && testTwoPairs(str);
}

function testStraight(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "z" || str[i + 1] === "z") continue;
    if (
      str[i + 1] === charLookup[str[i]] &&
      str[i + 2] === charLookup[str[i + 1]]
    ) {
      return true;
    }
  }
  return false;
}

function testInvalidChars(str) {
  return /[iol]/g.test(str);
}

function testTwoPairs(str) {
  let pair = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      if (pair && pair !== str[i]) {
        return true;
      }

      pair = str[i];
      i++;
    }
  }
  return false;
}

function incrementString(str) {
  let result = "";
  let carry = true;

  for (let i = str.length - 1; i >= 0; i--) {
    if (carry) {
      result = charLookup[str[i]] + result;
      carry = str[i] === "z";
    } else {
      result = str[i] + result;
    }
  }
  return result;
}

module.exports = findNextPassword;
