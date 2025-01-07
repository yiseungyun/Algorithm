const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const [N, K] = input[0].split(" ").map(Number);
  const weights = input[1].split(" ").map(Number);
  const result = solution(N, K, weights);
  console.log(result);
  process.exit();
});

const solution = (N, K, weights) => {
  weights.sort((a, b) => a - b);
  let count = 0;

  let left = 0, right = N - 1;
  while (left < right) {
    if (weights[left] + weights[right] <= K) {
      count++;
      left++;
      right--;
    } else {
      right--;
    }
  }

  return count;
}