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
  const [N, K] = input[0].split(" ").map(Number);
  let cats = input[1].split(" ").map(Number);
  let result = 0;

  cats.sort((a, b) => a - b);

  let left = 0, right = cats.length-1;
  while (left < right) {
    const sum = cats[left] + cats[right];
    if (sum <= K) {
      result++;
      left++; right--;
    } else {
      right--;
    }
  }

  return result;
}