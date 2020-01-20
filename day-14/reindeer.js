class Reindeer {
  constructor(name, speed, flyTime, restTime) {
    this.name = name;
    this.speed = speed;
    this.flyTime = flyTime;
    this.restTime = restTime;

    this.flying = true;
    this.flyTimer = flyTime;
    this.restTimer = restTime;
    this.distance = 0;

    this.points = 0;
  }

  givePoint() {
    this.points++;
  }

  flyStep() {
    if (this.flying) {
      this.flyTimer--;
      this.distance += this.speed;
    } else {
      this.restTimer--;
    }

    if (this.flyTimer <= 0 || this.restTimer <= 0) {
      this.flyTimer = this.flyTime;
      this.restTimer = this.restTime;
      this.flying = !this.flying;
    }

    return this.distance;
  }
}

module.exports = Reindeer;
