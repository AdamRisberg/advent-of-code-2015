function findFillCombinations(
  containers,
  amount,
  curContainers = [],
  combinations = [],
  seen = new Set()
) {
  for (let i = 0; i < containers.length; i++) {
    if (seen.has(`${containers[i]}${i}`)) {
      continue;
    }

    const curTotal = addArrayItems([...curContainers, containers[i]]);

    if (curTotal === amount) {
      combinations.push([...curContainers, containers[i]]);
      continue;
    } else if (curTotal > amount) {
      continue;
    }

    seen.add(`${containers[i]}${i}`);

    findFillCombinations(
      containers,
      amount,
      [...curContainers, containers[i]],
      combinations,
      new Set(seen)
    );
  }

  return combinations;
}

function findMinimumCountCombinations(combinations) {
  combinations.sort((a, b) => a.length - b.length);
  const minLength = combinations[0].length;
  let count = 0;

  for (let combination of combinations) {
    if (combination.length === minLength) {
      count++;
    } else {
      break;
    }
  }
  return count;
}

function addArrayItems(array) {
  return array.reduce((total, next) => total + next);
}

module.exports = {
  findFillCombinations,
  findMinimumCountCombinations
};
