function getRandomNumber() {
  return Math.random() * 1000;
}

function rollDie(max) {
  return Math.floor((getRandomNumber() % max) + 1);
}

export function rollMultipleDice(count, type) {
  let dice = [];
  for (let i = 0; i < count; i++) {
    dice.push(rollDie(type));
  }
  return dice;
}
