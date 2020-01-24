function generateCode(firstCode, targetRow, targetColumn) {
  const grid = createGrid(targetRow, targetColumn);

  let x = 0;
  let y = 0;
  let curRow = 0;
  let nextCode = firstCode;

  while (true) {
    grid[y][x] = nextCode;
    nextCode = calculateNextCode(nextCode);

    if (y === targetRow - 1 && x === targetColumn - 1) {
      return grid[y][x];
    }

    y--;
    x++;

    if (y < 0) {
      x = 0;
      curRow++;
      y = curRow;
    }
  }
}

function createGrid(targetRow, targetColumn) {
  return new Array(targetRow + targetColumn - 1)
    .fill(null)
    .map(() => new Array(targetColumn).fill(0));
}

function calculateNextCode(val) {
  return (val * 252533) % 33554393;
}

module.exports = generateCode;
