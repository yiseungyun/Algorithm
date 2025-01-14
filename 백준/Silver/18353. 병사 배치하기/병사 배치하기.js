const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = Number(input[0]);
  const result = solution(N, input[1].split(" ").map(Number));
  console.log(result);
  process.exit();
});

const solution = (N, soldier) => {
  let DP = Array.from({ length: N }, () => 1);
  
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (soldier[i] < soldier[j]) {
        DP[i] = Math.max(DP[i], DP[j]+1);
      }
    }
  }

  return N-Math.max(...DP); 
}