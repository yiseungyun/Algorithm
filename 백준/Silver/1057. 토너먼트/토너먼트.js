const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;

readline.on('line', (line) => {
  input = line;
  readline.close();
}).on('close', () => {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const solution = (input) => {
  let result = 1;
  let [N, p1, p2] = input.split(" ").map(element => Number(element));
  while (Math.ceil(p1/2) !== Math.ceil(p2/2)) {
    p1 = Math.ceil(p1/2);
    p2 = Math.ceil(p2/2);   
    result += 1;
  }
  return result;
}