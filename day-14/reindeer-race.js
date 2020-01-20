const Reindeer = require("./reindeer");

function raceReindeer(reindeerInfo, time) {
  const reindeerList = createReindeerListFromInfo(reindeerInfo);

  while (time > 0) {
    reindeerList.forEach(reindeer => reindeer.flyStep());
    findReindeerWithMostDistance(reindeerList).givePoint();
    time--;
  }

  return reindeerList;
}

function findReindeerWithHighestX(propertyName, reindeerList) {
  let highest = 0;
  let idx = 0;

  reindeerList.forEach((reindeer, i) => {
    if (reindeer[propertyName] > highest) {
      highest = reindeer[propertyName];
      idx = i;
    }
  });

  return reindeerList[idx];
}

const findReindeerWithMostDistance = findReindeerWithHighestX.bind(
  null,
  "distance"
);
const findReindeerWithMostPoints = findReindeerWithHighestX.bind(
  null,
  "points"
);

function createReindeerListFromInfo(lines) {
  return lines.map(createReindeerFromInfo);
}

function createReindeerFromInfo(line) {
  const reg = /\d+/g;
  const nums = [];

  while (true) {
    const regResult = reg.exec(line);
    if (!regResult) break;
    nums.push(Number(regResult[0]));
  }

  const name = /\w+/.exec(line)[0];
  const [speed, flyTime, restTime] = nums;

  return new Reindeer(name, speed, flyTime, restTime);
}

module.exports = {
  raceReindeer,
  findReindeerWithMostDistance,
  findReindeerWithMostPoints
};
