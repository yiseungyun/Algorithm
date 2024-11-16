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
  const sequence = input[1].split(" ").map(Number);
  let count = 0;
  let index = 1;

  while (index < N) {
    if (Math.abs(sequence[index-1]-sequence[index]) < M) {
      count++;
      index++;
    }
    index++;
  }

  return count;
}