const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, K, students;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, K] = input[0].split(' ').map(Number);
  students = input[1].split(' ').map(Number);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let left = 0, right = 10**12;
  while (left <= right) {
    const mid = Math.floor((left+right)/2);

    let sum = 0;
    for (const score of students) {
      const candy = score-mid;
      if (candy > 0) sum += candy;
    }

    if (sum > K) {
      left = mid+1;
    } else if (sum <= K) {
      right = mid-1;
    } 
  }

  return left;
}
