function createLightsGrid(instructions, width, height, altMethod) {
  const grid = createGrid(width, height);

  for (let i = 0; i < instructions.length; i++) {
    processLine(instructions[i], grid, altMethod);
  }

  return grid;
}

function processLine(str, grid, altMethod) {
  const { instruction, start, end } = parseLine(str);

  let lightToggler = getTogglerFunc(instruction, altMethod);

  toggleLights(grid, start, end, lightToggler);
}

function getTogglerFunc(instruction, altMethod) {
  switch (instruction) {
    case "turn on":
      return altMethod ? brightness => brightness + 1 : () => true;
    case "turn off":
      return altMethod
        ? brightness => Math.max(brightness - 1, 0)
        : () => false;
    case "toggle":
      return altMethod ? brightness => brightness + 2 : lit => !lit;
    default:
      throw new Error(`Unknown light instruction: ${instruction}`);
  }
}

function toggleLights(grid, start, end, cb) {
  for (let y = start.y; y <= end.y; y++) {
    for (let x = start.x; x <= end.x; x++) {
      grid[y][x] = cb(grid[y][x]);
    }
  }
}

function parseLine(str) {
  const coordStartIdx = /\d/.exec(str).index;
  const instruction = str.slice(0, coordStartIdx).trim();
  const coords = str
    .slice(coordStartIdx)
    .split("through")
    .map(s => {
      const arr = s.trim().split(",");
      return {
        x: parseInt(arr[0]),
        y: parseInt(arr[1])
      };
    });

  return {
    instruction,
    start: coords[0],
    end: coords[1]
  };
}

function countLitLights(grid) {
  let counter = 0;
  gridForEach(grid, light => (counter += light ? 1 : 0));
  return counter;
}

function getTotalBrightness(grid) {
  let counter = 0;
  gridForEach(grid, light => (counter += light));
  return counter;
}

function gridForEach(grid, cb) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      cb(grid[y][x]);
    }
  }
}

function createGrid(width, height) {
  return new Array(height)
    .fill(false)
    .map(() => [...new Array(width).fill(false)]);
}

module.exports = {
  createLightsGrid,
  countLitLights,
  getTotalBrightness
};
