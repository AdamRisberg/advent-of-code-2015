class Computer {
  constructor() {
    this.a = 0;
    this.b = 0;
    this.program = [];
    this.curIdx = 0;
  }

  loadProgram(program, registerA = 0, registerB = 0) {
    this.program = [...program];
    this.a = registerA;
    this.b = registerB;
    this.curIdx = 0;
  }

  half(register) {
    this[register] /= 2;
    this.curIdx++;
  }

  triple(register) {
    this[register] *= 3;
    this.curIdx++;
  }

  increment(register) {
    this[register]++;
    this.curIdx++;
  }

  jump(offset) {
    this.curIdx += offset;
  }

  jumpIfEven(register, offset) {
    if (this[register] % 2 === 0) {
      this.jump(offset);
    } else {
      this.curIdx++;
    }
  }

  jumpIfOne(register, offset) {
    if (this[register] === 1) {
      this.jump(offset);
    } else {
      this.curIdx++;
    }
  }

  run() {
    debugger;
    while (this.curIdx < this.program.length) {
      this.stepProgram();
    }
  }

  stepProgram() {
    const [command, paramA, paramB] = this.program[this.curIdx];

    switch (command) {
      case "hlf":
        this.half(paramA);
        break;
      case "tpl":
        this.triple(paramA);
        break;
      case "inc":
        this.increment(paramA);
        break;
      case "jmp":
        this.jump(parseInt(paramA));
        break;
      case "jie":
        this.jumpIfEven(paramA, parseInt(paramB));
        break;
      case "jio":
        this.jumpIfOne(paramA, parseInt(paramB));
        break;
      default:
        throw new Error(`Invalid command: ${command}`);
    }
  }
}

module.exports = Computer;
