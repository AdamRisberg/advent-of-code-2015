function firstHouseWithAtLeast(targetPresents, limitHouses) {
  let n = 1;
  let multiplier = limitHouses ? 11 : 10;

  while (true) {
    let divisors = listDivisors(n);

    if (limitHouses) {
      divisors = divisors.filter(x => n <= x * 50);
    }

    const result = addMultArray(divisors, multiplier);

    if (result >= targetPresents) {
      return [n, result];
    }
    n++;
  }
}

function addMultArray(array, multBy) {
  return array.map(n => n * multBy).reduce((a, b) => a + b, 0);
}

function listDivisors(n) {
  var divisors = [];
  var end = Math.floor(Math.sqrt(n));

  for (var i = 1; i <= end; i++) {
    if (n % i == 0) {
      divisors.push(i);
      if (i * i != n) divisors.push(n / i);
    }
  }

  return divisors;
}

module.exports = firstHouseWithAtLeast;
