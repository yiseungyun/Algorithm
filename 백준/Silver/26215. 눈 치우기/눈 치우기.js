const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, houses;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = Number(input[0]);
  houses = input[1].split(' ').map(Number);
  const result = solution();
  console.log(result > 1440 ? -1 : result);
  process.exit();
});

const solution = () => {
  let minutes = 0;

  while (houses.length > 0) {
    houses.sort((a, b) => b - a);
    houses[0]--;
    if (houses.length-1 >= 1) houses[houses.length-1]--;
    if (houses[0] === 0) houses.pop();
    if (houses[houses.length-1] === 0) houses.pop();
    minutes++;
  }

  return minutes;
}
