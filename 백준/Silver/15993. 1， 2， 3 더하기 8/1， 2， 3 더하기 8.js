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
  input.shift();
  let DP = Array(100000+1).fill(0).map(() => [0, 0]);
  [DP[0], DP[1], DP[2], DP[3]] = [[0, 0], [1, 0], [1, 1], [2, 2]];
  let result = [];

  for (let i = 4; i <= 100000; i++) {
    DP[i][0] = (DP[i-1][1]+DP[i-2][1]+DP[i-3][1]) % 1000000009;
    DP[i][1] = (DP[i-1][0]+DP[i-2][0]+DP[i-3][0]) % 1000000009;
  }

  input.forEach(n => {
    result.push(DP[n].join(" "));  
  });

  return result; 
}