const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(Number(input[0]), input[1].split(" ").map(Number));
  console.log(result);
  process.exit();
});

const solution = (N, speeds) => {
  for (let i = N-1; i >= 1; i--) {
    if (speeds[i] > speeds[i-1]) {
      speeds[i-1] *= Math.ceil(speeds[i] / speeds[i-1]);
    }
  }

  return speeds[0];
}