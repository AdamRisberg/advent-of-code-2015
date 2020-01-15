function findFloorNumber(parens) {
  return parens.split("").reduce((floor, char) => {
    return floor + (char === "(" ? 1 : -1);
  }, 0);
}

function findPositionResultingInFloor(parens, targetFloor) {
  let floor = 0;

  for (let i = 0; i < parens.length; i++) {
    const char = parens[i];
    floor += char === "(" ? 1 : -1;

    if (floor === targetFloor) {
      return i + 1;
    }
  }
}

module.exports = {
  findFloorNumber,
  findPositionResultingInFloor
};
