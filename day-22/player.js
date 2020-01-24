class Player {
  constructor(health, mana) {
    this.health = health;
    this.mana = mana;
    this.damage = 0;
    this.armor = 0;
    this.activeSpells = [];
    this.totalSpent = 0;
  }

  isAlive = function() {
    return this.health > 0;
  };

  applySpells = function(boss) {
    this.armor = 0;
    this.damage = 0;

    for (let spell of this.activeSpells) {
      this.health += spell.heal;
      this.mana += spell.mana;
      this.damage += spell.damage;
      this.armor += spell.armor;
      spell.lasts--;
    }

    this.activeSpells = this.activeSpells.filter(s => s.lasts > 0);
    boss.health -= this.damage;
  };

  castSpell = function(spell, boss) {
    this.mana -= spell.cost;
    this.totalSpent += spell.cost;

    if (spell.instant) {
      boss.health -= spell.damage;
      this.health += spell.heal;
    } else {
      this.activeSpells.push({ ...spell });
    }
  };

  canCastSpell = function(spell) {
    return (
      this.mana >= spell.cost &&
      !this.activeSpells.filter(cur => cur.name === spell.name).length
    );
  };
}

module.exports = Player;
