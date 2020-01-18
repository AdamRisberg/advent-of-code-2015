function lookAndSay(num, times) {
  let numStr = num.toString();
  let counter = 0;

  while (counter < times) {
    let newNumStr = "";
    let curChar = numStr[0];
    let charCount = 1;

    for (let i = 1; i <= numStr.length; i++) {
      if (curChar === numStr[i]) {
        charCount++;
        continue;
      }

      newNumStr += charCount + curChar;
      curChar = numStr[i];
      charCount = 1;
    }

    numStr = newNumStr;
    counter++;
  }
  return numStr;
}

module.exports = lookAndSay;
