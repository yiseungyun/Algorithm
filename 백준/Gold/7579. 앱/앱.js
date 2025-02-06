const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M, memory, cost;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M]= input[0].split(' ').map(Number);
  memory = input[1].split(' ').map(Number);
  cost = input[2].split(' ').map(Number);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let result = Infinity;
  const totalCost = cost.reduce((sum, c) => sum + c, 0);
  let DP = Array.from({ length: N }, () => new Array(totalCost+1).fill(0));

  for (let j = cost[0]; j <= totalCost; j++) {
    DP[0][j] = memory[0];
  }

  for (let i = 1; i < N; i++) {
    for (let j = 0; j <= totalCost; j++) {
      if (j-cost[i] >= 0) {
        DP[i][j] = Math.max(DP[i-1][j], DP[i-1][j-cost[i]]+memory[i]);
      } else {
        DP[i][j] = DP[i-1][j];
      }
    }
  }

  for (let i = 0; i <= totalCost; i++) {
    if (DP[N-1][i] >= M) {
      result = Math.min(result, i);
    }
  }
  
  return result;
}