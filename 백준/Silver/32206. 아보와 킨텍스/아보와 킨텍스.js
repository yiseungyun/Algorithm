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
  const N = Number(input[0]);
  const S = input[1];

  return 26+N*25;
}