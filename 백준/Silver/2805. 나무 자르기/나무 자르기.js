const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const tree = input[1].split(" ").map(Number);

  let left = 1, right = Math.max(...tree);

  while (left <= right) {
    const mid = Math.floor((left+right)/2);
    let sum = 0;

    for (const t of tree) {
      sum = sum + (t >= mid ? t-mid : 0);
    }

    if (sum === M) {
      return mid;
    } else if (sum > M) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }

  return right;
}