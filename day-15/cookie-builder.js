function getAllPossibleScores(ingredients, targetCalories) {
  const scores = [];
  const targetCalorieScores = [];

  for (let sprinkles = 0; sprinkles < 101; sprinkles++) {
    for (let butterscotch = 0; butterscotch < 101; butterscotch++) {
      if (butterscotch + sprinkles > 100) break;

      for (let chocolate = 0; chocolate < 101; chocolate++) {
        if (chocolate + butterscotch + sprinkles > 100) break;

        for (let candy = 0; candy < 101; candy++) {
          const total = candy + chocolate + butterscotch + sprinkles;
          if (total > 100) break;

          if (total === 100) {
            ingredients[0].quantity = sprinkles;
            ingredients[1].quantity = butterscotch;
            ingredients[2].quantity = chocolate;
            ingredients[3].quantity = candy;

            const score = getTotalScore(ingredients);
            scores.push(score);

            if (targetCalories === getTotalCalories(ingredients)) {
              targetCalorieScores.push(score);
            }
          }
        }
      }
    }
  }
  return [
    scores.sort((a, b) => b - a)[0],
    targetCalorieScores.sort((a, b) => b - a)[0]
  ];
}

function getTotalScore(ingredients) {
  return ["capacity", "durability", "flavor", "texture"]
    .map(prop => {
      const total = ingredients.reduce((total, next) => {
        return total + next.getTotal(prop);
      }, 0);
      return Math.max(total, 0);
    })
    .reduce((total, next) => {
      return total * next;
    }, 1);
}

function getTotalCalories(ingredients) {
  return ingredients.reduce((total, next) => {
    return total + next.quantity * next.calories;
  }, 0);
}

function parseData(array) {
  const ingredients = [];

  array.forEach(data => {
    const [ingredient, params] = data.split(":");
    const [capacity, durability, flavor, texture, calories] = params
      .replace(/[^0-9-,]/g, "")
      .split(",")
      .map(Number);

    ingredients.push({
      name: ingredient,
      capacity,
      durability,
      flavor,
      texture,
      calories,
      quantity: 100 / array.length,
      getTotal: function(prop) {
        return this[prop] * this.quantity;
      }
    });
  });

  return ingredients;
}

module.exports = {
  parseData,
  getAllPossibleScores
};
