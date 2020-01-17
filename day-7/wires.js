function runWires(instructions) {
  const wires = {};

  while (instructions.length) {
    const instruction = instructions.shift();
    const { operation, inputA, inputB, output } = parseInstruction(instruction);
    const a = getSignal(inputA, wires);
    const b = getSignal(inputB, wires);

    switch (operation) {
      case "AND":
        if (a === undefined || b === undefined) break;
        wires[output] = a & b;
        break;
      case "OR":
        if (a === undefined || b === undefined) break;
        wires[output] = a | b;
        break;
      case "LSHIFT":
        if (a === undefined || b === undefined) break;
        wires[output] = a << b;
        break;
      case "RSHIFT":
        if (a === undefined || b === undefined) break;
        wires[output] = a >> b;
        break;
      case "NOT":
        if (b === undefined) break;
        wires[output] = not(b);
        break;
      default:
        if (a === undefined) break;
        wires[output] = a;
        break;
    }

    if (wires[output] === undefined) {
      instructions.push(instruction);
    }
  }

  return wires;
}

function not(num) {
  if (num === undefined) return;
  let binaryStr = num.toString(2).padStart(16, "0");
  let inverse = binaryStr
    .split("")
    .map(c => (c === "0" ? "1" : "0"))
    .join("");

  return parseInt(inverse, 2);
}

function getSignal(input, wires) {
  if (isNumber(input)) {
    return Number(input);
  }

  return wires[input];
}

function isNumber(str) {
  const num = Number(str);
  return num === num;
}

function parseInstruction(str) {
  const opRegex = /AND|OR|LSHIFT|RSHIFT|NOT/.exec(str);
  const operation = opRegex && opRegex[0];
  const [inputs, output] = str.split("->").map(s => s.trim());
  const [inputA, inputB] = inputs.split(operation).map(s => s.trim());

  return {
    operation,
    inputA,
    inputB,
    output
  };
}

module.exports = runWires;
