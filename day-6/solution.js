const input = require("./input");
const lights = require("./lights");
const { createLightsGrid, countLitLights, getTotalBrightness } = lights;

const grid = createLightsGrid(input, 1000, 1000);
const part1 = countLitLights(grid);
console.log(`Part 1: ${part1}`);

const gridB = createLightsGrid(input, 1000, 1000, true);
const part2 = getTotalBrightness(gridB);
console.log(`Part 2: ${part2}`);
