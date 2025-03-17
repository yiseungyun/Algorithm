const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, village;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = Number(input[0]);
  village = input.slice(1).map(i => i.split(' ').map(Number));
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let person = 0;
  let location = 0;

  village.sort((a, b) => a[0]-b[0]);

  for (const [_, a] of village) person += a;

  let sum = 0;
  for (const [x, a] of village) {
    sum += a;
    if (sum >= Math.ceil(person/2)) {
      location = x;
      break;
    }
  }

  return location;
}
