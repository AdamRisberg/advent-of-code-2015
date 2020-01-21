function findSue(sues, itemsDetected) {
  for (let i = 0; i < sues.length; i++) {
    const curSue = sues[i];

    let found = true;
    for (let itemName in curSue) {
      if (!itemsDetected[itemName](curSue[itemName])) {
        found = false;
        break;
      }
    }

    if (found) {
      return i + 1;
    }
  }
}

function parseInfoList(infoList) {
  return infoList.map(parseInfo);
}

function parseInfo(info) {
  const regResult = /^Sue \d+/g.exec(info);
  const name = regResult[0];
  let items = info
    .slice(name.length)
    .replace(/:/g, "")
    .trim()
    .split(", ")
    .reduce((obj, item) => {
      const [name, amount] = item.split(" ");
      obj[name] = Number(amount);
      return obj;
    }, {});

  return items;
}

module.exports = {
  parseInfoList,
  findSue
};
