function findAllNumbers(input, filterObj = () => true) {
  if (typeof input === "string") {
    return 0;
  }

  if (typeof input === "number") {
    return input;
  }

  if (typeof input === "object" && !Array.isArray(input)) {
    if (!filterObj(input)) {
      return 0;
    }

    input = Object.keys(input).map(key => input[key]);
  }

  let total = 0;

  for (let i = 0; i < input.length; i++) {
    total += findAllNumbers(input[i], filterObj);
  }

  return total;
}

function filterObj(obj) {
  return !Object.values(obj).includes("red");
}

module.exports = {
  findAllNumbers,
  filterObj
};
