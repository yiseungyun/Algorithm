const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
let input = [];
let N, children;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = Number(input[0]);
  children = input[1].split(' ').map(Number);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let location = new Array(N).fill(0);
  let DP = new Array(N).fill(1);
  for (let i = 0; i < N; i++) {
    location[children[i]-1] = i;
  }

  for (let i = 0; i < N; i++) {
    const child = children[i];
    if (child < N && location[child] > i) {
      DP[child] = DP[child-1]+1;
    }
  }

  return N-Math.max(...DP);
}