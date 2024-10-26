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
  let minHeap = [...rodList.sort((a, b) => a - b)];

  let minCost = 0;

  while (minHeap.length > 1) {
    const first = minHeap.shift();
    const second = minHeap.shift();

    const cost = first*second;
    minCost += cost;

    minHeap.push(first+second);
    minHeap.sort((a, b) => a - b);
  }
  
  return minCost;
}