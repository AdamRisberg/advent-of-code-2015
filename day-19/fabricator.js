function generateMolecules(replacements, molecule) {
  const distinct = new Set();

  for (let i = 0; i < replacements.length; i++) {
    const [from, to] = replacements[i];

    for (let j = 0; j < molecule.length; j++) {
      const startIdx = j;
      const endIdx = j + from.length;

      if (molecule.slice(startIdx, endIdx) === from) {
        distinct.add(molecule.slice(0, startIdx) + to + molecule.slice(endIdx));
      }
    }
  }

  return distinct;
}

function findMinStepsToFabricate(replacements, molecule) {
  const lookup = createReverseLookup(replacements);
  return calcStepsToFabricate(lookup, molecule);
}

function calcStepsToFabricate(replacements, molecule, steps = 0) {
  if (molecule === "e") {
    return steps;
  }

  for (let key in replacements) {
    const regex = new RegExp(key, "g");

    while (true) {
      const regResult = regex.exec(molecule);
      if (regResult) {
        const potentialSteps = calcStepsToFabricate(
          replacements,
          molecule.slice(0, regResult.index) +
            replacements[key] +
            molecule.slice(regResult.index + key.length),
          steps + 1
        );

        if (potentialSteps) {
          return potentialSteps;
        }
      } else {
        break;
      }
    }
  }
}

function createReverseLookup(replacements) {
  const lookup = {};

  for (let replace of replacements) {
    lookup[replace[1]] = replace[0];
  }

  return lookup;
}

module.exports = {
  generateMolecules,
  findMinStepsToFabricate
};
