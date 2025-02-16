const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, stair;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = Number(input[0]);
  stair = input.slice(1).map(Number);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let DP = Array.from({length: N}, () => 0);
  if (N === 1) return stair[0];
  if (N === 2) return stair[0]+stair[1];

  DP[0] = stair[0];
  DP[1] = stair[0]+stair[1];
  DP[2] = Math.max(stair[0]+stair[2], stair[1]+stair[2]);

  for (let i = 3; i < N; i++) {
    DP[i] = Math.max(DP[i-2]+stair[i], DP[i-3]+stair[i-1]+stair[i]);
  }

  return DP[N-1];
}
