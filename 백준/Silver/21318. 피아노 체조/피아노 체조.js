const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = Number(input[0]);
  const level = input[1].split(" ").map(Number);
  const Q = Number(input[2]);
  const xyList = input.slice(3).map(array => {
    return array.split(" ").map(Number);
  });
  const result = solution(N, level, Q, xyList);
  console.log(result.join("\n"));
  process.exit();
});

const solution = (N, level, Q, xyList) => {
  let result = [];
  let mistake = new Array(N).fill(0);

  for (let i = 1; i < N; i++) {
    mistake[i] = mistake[i-1] + (level[i] < level[i-1] ? 1 : 0);
  }

  for (const [x, y] of xyList) {
    result.push(mistake[y-1]-mistake[x-1]);
  }

  return result;
}