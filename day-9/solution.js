const input = require("./input");
const routePlanner = require("./route-planner");
const { buildGraph, getAllRouteDistances } = routePlanner;

const routes = buildGraph(input);
const distances = getAllRouteDistances("", routes).sort();

const part1 = distances[0];
const part2 = distances[distances.length - 1];

console.log(`Part 1: ${part1}`);
console.log(`Part 2: ${part2}`);
