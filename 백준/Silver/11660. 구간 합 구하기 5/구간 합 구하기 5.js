const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M] = input[0].split(' ').map(Number);
  const result = solution(input.slice(1));
  console.log(result.join('\n'));
  process.exit();
});

const solution = (input) => {
  let table = input.slice(0, N);
  let result = [];
  let testcase = input.slice(N);
  let DP = Array.from({ length: N }, () => new Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    table[i] = table[i].split(' ').map(Number);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      DP[i][j] = table[i][j] + (j-1 >= 0 ? DP[i][j-1] : 0);
    }
  }

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < N; j++) {
      DP[i][j] = DP[i-1][j] + DP[i][j];
    }
  }

  for (const test of testcase) {
    const [x1, y1, x2, y2] = test.split(' ').map(Number);
    const minus = (y1-2 >= 0 ? DP[x2-1][y1-2] : 0)+(x1-2 >= 0 ? DP[x1-2][y2-1] : 0);
    const plus = x1-2 >= 0 && y1-2 >= 0 ? DP[x1-2][y1-2] : 0;
    let sum = DP[x2-1][y2-1] - minus + plus;
    result.push(sum);
  }

  return result;
}