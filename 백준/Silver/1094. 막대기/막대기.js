const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

readline.on('line', (line) => {
  input = Number(line);
  readline.close();
}).on('close', () => {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const sum = (array) => {
  return array.reduce((acc, val) => acc + val, 0);
}

const findMinStick = (stick) => {
  let minStick = 65, minIndex = -1;
  for (let i = 0; i < stick.length; i++) {
    if (minStick > stick[i]) {
      [minStick, minIndex] = [stick[i], i];
    }
  }
  return [minStick, minIndex];
}

const solution = (X) => {
  let stick = [64];
  while (X < sum(stick)) {
    const [minStick, minIndex] = findMinStick(stick);
    stick[minIndex] = minStick/2;
    if (sum(stick) < X) {
      stick.push(minStick/2);
    } else if (sum(stick) === X) {
      return stick.length;
    }
  }
  return stick.length;
}