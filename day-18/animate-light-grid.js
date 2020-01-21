function animateLights(grid, steps, lockCorners) {
  let gridCopy = grid.map(row => row.slice());

  if (lockCorners) {
    setCornersOn(gridCopy);
  }

  while (steps) {
    gridCopy = stepGrid(gridCopy, lockCorners);
    steps--;
  }
  return gridCopy;
}

function stepGrid(grid, lockCorners) {
  const gridCopy = grid.map(row => row.slice());

  gridForEach(grid, (_, x, y) => {
    gridCopy[y][x] = nextLightState(x, y, grid, lockCorners);
  });

  return gridCopy;
}

function nextLightState(x, y, grid, lockCorners) {
  const on = grid[y][x] === "#";
  let count = 0;

  if (lockCorners && isCorner(x, y, grid)) {
    return "#";
  }

  if (grid[y - 1] && grid[y - 1][x - 1] === "#") count++;
  if (grid[y - 1] && grid[y - 1][x] === "#") count++;
  if (grid[y - 1] && grid[y - 1][x + 1] === "#") count++;
  if (grid[y][x - 1] === "#") count++;
  if (grid[y][x + 1] === "#") count++;
  if (grid[y + 1] && grid[y + 1][x - 1] === "#") count++;
  if (grid[y + 1] && grid[y + 1][x] === "#") count++;
  if (grid[y + 1] && grid[y + 1][x + 1] === "#") count++;

  if (on) {
    if (count === 2 || count === 3) {
      return "#";
    }
    return ".";
  }

  if (count === 3) {
    return "#";
  }
  return ".";
}

function countLights(grid) {
  let count = 0;

  gridForEach(grid, light => {
    if (light === "#") {
      count++;
    }
  });

  return count;
}

function setCornersOn(grid) {
  grid[0][0] = "#";
  grid[0][grid[0].length - 1] = "#";
  grid[grid.length - 1][0] = "#";
  grid[grid.length - 1][grid[0].length - 1] = "#";
}

function isCorner(x, y, grid) {
  const top = 0;
  const left = 0;
  const right = grid[0].length - 1;
  const bottom = grid.length - 1;

  if ((x === left || x === right) && (y === bottom || y === top)) {
    return true;
  }
  return false;
}

function gridForEach(grid, cb) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      cb(grid[y][x], x, y);
    }
  }
}

module.exports = {
  animateLights,
  countLights
};
