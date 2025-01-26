const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result.join("\n"));
  process.exit();
});

const solution = (input) => {
  let result = [];
  const K = Number(input[0]);
  let DP = new Array(11).fill(0);
  DP[1] = 1, DP[2] = 2, DP[3] = 4;

  for (let i = 4; i < 11; i++) {
    DP[i] = DP[i-1]+DP[i-2]+DP[i-3];
  }

  for (let i = 1; i < K+1; i++) {
    const N = Number(input[i]);
    result.push(DP[N]);
  }

  return result;
}