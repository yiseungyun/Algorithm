const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result.join("\n"));
  process.exit();
});

const solution = (input) => {
  const T = Number(input[0]);
  let result = [];

  for (let i = 0; i < T; i++) {
    const N = Number(input[i*2+1]);
    const pigs = input[i*2+2].split(" ").map(Number);
    let totalFeed = pigs.reduce((acc, curr) => { return acc + curr }, 0);
    let day = 1;

    while (N-totalFeed >= 0) {
      day++;
      totalFeed = 4*totalFeed;
    }

    result.push(day);
  }

  return result;
}