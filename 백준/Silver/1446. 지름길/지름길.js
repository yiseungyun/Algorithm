const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, D, road, DP;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, D] = input[0].split(' ').map(Number);
  road = input.slice(1).map(i => i.split(' ').map(Number)); 
  DP = Array.from({ length: D+1 }, (_, i) => i); 
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  road.sort((a, b) => a[0] > b[0] ? 1 : -1); 

  for (const [a, b, dist] of road) {
    if (b <= D) {
      for (let i = 1; i < D+1; i++) {
        if (i === b) {
          DP[i] = Math.min(DP[i], DP[a]+dist);
        } else {
          DP[i] = Math.min(DP[i], DP[i-1]+1);
        }
      }
    }
  }
   
  return DP[D];
}