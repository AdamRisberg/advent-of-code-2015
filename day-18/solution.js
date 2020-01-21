const inputs = require("./input");
const animateLightGrid = require("./animate-light-grid");
const { animateLights, countLights } = animateLightGrid;

const lightGridA = animateLights(inputs, 100);
const part1 = countLights(lightGridA);
console.log(`Part 1: ${part1}`);

const lightGridB = animateLights(inputs, 100, true);
const part2 = countLights(lightGridB);
console.log(`Part 2: ${part2}`);
