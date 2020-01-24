function findWinWithLeastCost(player, boss, spells, hardMode, wins = []) {
  // No need to continue if it can't be the least
  if (player.totalSpent >= wins[0]) return;

  if (!boss.isAlive()) {
    wins.push(player.totalSpent);
    wins.sort((a, b) => a - b);
    return;
  }

  if (hardMode) {
    player.health--;
  }

  if (!player.isAlive()) {
    return;
  }

  // Update spell timers, apply effects, and
  player.applySpells(boss);

  for (let spell of spells) {
    if (!player.canCastSpell(spell)) {
      continue;
    }

    // Create copies to be passed to recursive call
    const playerCopy = copyPlayer(player);
    const bossCopy = { ...boss };

    playerCopy.castSpell(spell, bossCopy);

    // Boss turn
    playerCopy.applySpells(bossCopy);
    bossCopy.attack(playerCopy);

    findWinWithLeastCost(playerCopy, bossCopy, spells, hardMode, wins);
  }

  return wins[0];
}

function copyPlayer(player) {
  return {
    ...player,
    activeSpells: player.activeSpells.map(spell => ({ ...spell }))
  };
}

module.exports = findWinWithLeastCost;
