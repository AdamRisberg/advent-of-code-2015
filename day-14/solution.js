const input = require("./input");
const reindeerRace = require("./reindeer-race");
const {
  raceReindeer,
  findReindeerWithMostDistance,
  findReindeerWithMostPoints
} = reindeerRace;

const reindeer = raceReindeer(input, 2503);

const winnerA = findReindeerWithMostDistance(reindeer);
console.log(`Part 1: ${winnerA.distance}`);

const winnerB = findReindeerWithMostPoints(reindeer);
console.log(`Part 1: ${winnerB.points}`);
