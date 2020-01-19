function findMaxHappiness(
  relationships,
  cur,
  seen = new Set(),
  happiness = 0,
  start
) {
  const possible = relationships[cur] || relationships;
  let maxHappiness;

  seen.add(cur);

  for (let person in possible) {
    if (seen.has(person)) {
      continue;
    }

    const potentialMaxHappiness = findMaxHappiness(
      relationships,
      person,
      new Set(seen),
      typeof possible[person] === "number" ? possible[person] : 0,
      start || person
    );

    maxHappiness = Math.max(maxHappiness || 0, potentialMaxHappiness);
  }

  if (maxHappiness !== undefined) {
    return happiness + maxHappiness;
  }

  return happiness + relationships[cur][start];
}

function createRelationships(happinessList) {
  const relationships = {};

  for (let i = 0; i < happinessList.length; i++) {
    const { nameA, nameB, amount } = extractInfo(happinessList[i]);

    if (!relationships[nameA]) {
      relationships[nameA] = {};
    }

    if (!relationships[nameB]) {
      relationships[nameB] = {};
    }

    relationships[nameA][nameB] = amount + (relationships[nameA][nameB] || 0);
    relationships[nameB][nameA] = amount + (relationships[nameB][nameA] || 0);
  }

  return relationships;
}

function extractInfo(line) {
  const [nameA, gainLoss, amount, nameB] = line
    .replace(/would |happiness units by sitting next to |\./g, "")
    .split(" ");

  return {
    nameA,
    nameB,
    amount: Number(amount) * (gainLoss === "lose" ? -1 : 1)
  };
}

function addNeutralPerson(name, relationships) {
  const keys = Object.keys(relationships);
  relationships[name] = {};

  keys.forEach(person => {
    relationships[name][person] = 0;
    relationships[person][name] = 0;
  });
}

module.exports = {
  findMaxHappiness,
  createRelationships,
  addNeutralPerson
};
