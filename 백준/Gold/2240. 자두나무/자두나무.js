const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
let input = [];
let T, W, info;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [T, W] = input[0].split(' ').map(Number);
  info = input.slice(1).map(Number);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let DP = Array.from({length: T}, () => new Array(W+1).fill(0));

  DP[0][0] = info[0] === 1 ? 1 : 0;
  DP[0][1] = info[0] === 2 ? 1 : 0;
  
  for (let i = 1; i < T; i++) {
    const tree = info[i];
    for (let w = 0; w < W+1; w++) {
      let value = 0;
      if (w % 2 === 0) { // 1번 나무 아래
        value = tree === 1 ? 1 : 0;
      } else { // 2번 나무 아래
        value = tree === 2 ? 1 : 0;
      }
      
      DP[i][w] = Math.max(w-1 >= 0 ? DP[i-1][w-1] : 0, DP[i-1][w]) + value;
    }
  }

  return Math.max(...DP[T-1]);
}