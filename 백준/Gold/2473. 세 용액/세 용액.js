const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, sequence;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = Number(input[0]);
  sequence = input[1].split(' ').map(Number);
  const result = solution();
  console.log(result.join(' '));
  process.exit();
});

const solution = () => {
  let result = [Infinity, Infinity, Infinity];
  let minSum = Infinity;

  sequence.sort((a, b) => a - b);
  
  for (let i = 0; i < N; i++) {
    let left = 0, right = N-1;
    while (left < right) {
      left = (i === left ? left+1 : left);
      right = (i === right ? right-1 : right);

      if (left === right) continue;

      const sum = sequence[i]+sequence[left]+sequence[right];
      if (sum > 0) {
        if (minSum > Math.abs(sum)) {
          minSum = Math.abs(sum);
          result = [sequence[i], sequence[left], sequence[right]];
        }
        right--;
      } else if (sum < 0) {
        if (minSum > Math.abs(sum)) {
          minSum = Math.abs(sum);
          result = [sequence[i], sequence[left], sequence[right]];
        }
        left++;
      } else {
        return [sequence[i], sequence[left], sequence[right]].sort((a, b) => a - b);
      }
    }
  }

  return result.sort((a, b) => a - b);
}
