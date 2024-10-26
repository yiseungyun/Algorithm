const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let count = 0;

readline.on('line', (line) => {
  input.push(line);
  count++;
  if (count === 2) {
    readline.close();
  }
}).on('close', () => {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const solution = (input) => {
  const rodList = input[1].split(" ").map(Number);
  let sumOfrod = rodList.reduce((acc, curr) => acc + curr, 0);
  let minCost = 0;

  rodList.forEach(rod => {
    sumOfrod -= rod;
    minCost += rod*sumOfrod;
  });
  
  return minCost;
}
