function runAllPossibleBattles(playerStats, bossStats, store) {
  let playerGenerator = playerStatGenerator(playerStats, store);
  let player = playerGenerator.next();
  const winCosts = [];
  const lossCosts = [];

  while (!player.done) {
    const won = battle(player.value, { ...bossStats });

    if (won) {
      winCosts.push(player.value.spent);
    } else {
      lossCosts.push(player.value.spent);
    }

    player = playerGenerator.next();
  }

  return {
    wins: winCosts.sort((a, b) => a - b),
    losses: lossCosts.sort((a, b) => b - a)
  };
}

function battle(player, boss) {
  let playerTurn = true;

  while (player.hitPoints > 0 && boss.hitPoints > 0) {
    if (playerTurn) {
      boss.hitPoints -= Math.max(player.damage - boss.armor, 1);
    } else {
      player.hitPoints -= Math.max(boss.damage - player.armor, 1);
    }

    playerTurn = !playerTurn;
  }

  return player.hitPoints > 0;
}

function* playerStatGenerator(baseStats, store) {
  for (let weapon of store.weapons) {
    for (let armor of store.armor) {
      for (let ringA of store.rings) {
        for (let ringB of store.rings) {
          let secondRing = ringB;

          if (ringA.name === ringB.name) {
            secondRing = store.rings[0];
          }

          const combinedRings = {
            name: `${ringA.name} + ${secondRing.name}`,
            cost: ringA.cost + secondRing.cost,
            damage: ringA.damage + secondRing.damage,
            armor: ringA.armor + secondRing.armor
          };

          yield {
            ...baseStats,
            equipment: [weapon.name, armor.name, combinedRings.name],
            damage: weapon.damage + combinedRings.damage,
            armor: armor.armor + combinedRings.armor,
            spent: weapon.cost + armor.cost + combinedRings.cost
          };
        }
      }
    }
  }
}

module.exports = runAllPossibleBattles;
