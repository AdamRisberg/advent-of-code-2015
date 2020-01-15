function deliver(instructions) {
  const position = { x: 0, y: 0 };
  const seen = new Set();
  seen.add(JSON.stringify(position));

  for (let i = 0; i < instructions.length; i++) {
    move(position, instructions[i]);
    seen.add(JSON.stringify(position));
  }

  return seen.size;
}

function deliverWithRobot(instructions) {
  const position = { x: 0, y: 0 };
  const robotPosition = { x: 0, y: 0 };
  let robotTurn = false;
  const seen = new Set();
  seen.add(JSON.stringify(position));

  for (let i = 0; i < instructions.length; i++) {
    const curPosition = robotTurn ? robotPosition : position;
    move(curPosition, instructions[i]);
    seen.add(JSON.stringify(curPosition));
    robotTurn = !robotTurn;
  }

  return seen.size;
}

function move(position, direction) {
  switch (direction) {
    case "^":
      position.y += 1;
      break;
    case "v":
      position.y += -1;
      break;
    case ">":
      position.x += 1;
      break;
    case "<":
      position.x += -1;
      break;
    default:
      throw new Error(`Invalid direction: ${direction}`);
  }
}

module.exports = {
  deliver,
  deliverWithRobot
};
