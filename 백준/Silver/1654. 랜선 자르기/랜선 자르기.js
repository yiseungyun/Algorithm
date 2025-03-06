const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let K, N;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [K, N] = input[0].split(' ').map(Number);
  const result = solution(input.slice(1));
  console.log(result);
  process.exit();
});

const solution = (input) => {
  let maxLength = 0;
  const lanCables = input.map(Number);
  let left = 1, right = Math.max(...lanCables);

  while (left <= right) {
    const mid = Math.floor((left+right)/2);

    let count = 0;
    for (const lan of lanCables) {
      count += Math.floor(lan/mid);
    }
    
    if (count >= N) {
      left = mid+1;
      maxLength = Math.max(maxLength, mid);
    } else {
      right = mid-1;
    }
  }

  return maxLength;
}
