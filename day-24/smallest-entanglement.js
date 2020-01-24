function findSmallestEntanglement(nums, numOfGroups) {
  let leastPackages = Infinity;
  let limit = nums.length / numOfGroups;
  let smallestEntanglement = Infinity;

  for (let i = 1; i < limit && i <= leastPackages; i++) {
    const groups = allGroupsOf(nums, i);

    for (let group of groups) {
      const sumA = sumArray(group);
      const leftOver = filterArrayByArray(nums, group);
      const sumB = sumArray(leftOver);

      if (sumB / (numOfGroups - 1) === sumA) {
        leastPackages = i;
        smallestEntanglement = Math.min(
          smallestEntanglement,
          multiplyArray(group)
        );
      }
    }
  }

  return smallestEntanglement;
}

function multiplyArray(array) {
  return array.reduce((a, b) => a * b);
}

function sumArray(array) {
  return array.reduce((a, b) => a + b);
}

function filterArrayByArray(array, filterOut) {
  return array.filter(num => !filterOut.includes(num));
}

function allGroupsOf(
  nums,
  groupSize,
  groups = [],
  curGroup = [],
  seen = new Set()
) {
  if (curGroup.length === groupSize) {
    groups.push(curGroup);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    const seenKey = `${nums[i]} ${i}`;

    if (seen.has(seenKey)) {
      continue;
    }

    seen.add(seenKey);

    allGroupsOf(nums, groupSize, groups, [...curGroup, nums[i]], new Set(seen));
  }

  return groups;
}

module.exports = findSmallestEntanglement;
