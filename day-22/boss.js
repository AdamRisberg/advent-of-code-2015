class Boss {
  constructor(health, damage) {
    this.health = health;
    this.damage = damage;
  }

  isAlive = function() {
    return this.health > 0;
  };

  attack = function(player) {
    player.health -= this.damage - player.armor;
  };
}

module.exports = Boss;
