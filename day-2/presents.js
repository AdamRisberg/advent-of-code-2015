function calculateTotalWrappingPaper(dimensions) {
  return dimensions.reduce((total, next) => {
    const [x, y, z] = next.split("x").map(char => parseInt(char));
    return total + calculateWrappingPaper(x, y, z);
  }, 0);
}

function calculateWrappingPaper(x, y, z) {
  const sideA = x * y;
  const sideB = y * z;
  const sideC = x * z;
  const needed = 2 * sideA + 2 * sideB + 2 * sideC;
  const extra = Math.min(sideA, sideB, sideC);
  return needed + extra;
}

function calculateTotalRibbon(dimensions) {
  return dimensions.reduce((total, next) => {
    const [x, y, z] = next
      .split("x")
      .map(char => parseInt(char))
      .sort((a, b) => a - b);
    return total + calculateRibbon(x, y, z);
  }, 0);
}

function calculateRibbon(x, y, z) {
  const present = x + x + y + y;
  const bow = x * y * z;
  return present + bow;
}

module.exports = {
  calculateTotalWrappingPaper,
  calculateTotalRibbon
};
