const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let count = 0;

readline.on('line', (line) => {
  input.push(line); 
  count++;

  if (count >= 2) {
    readline.close();
  }
}).on('close', () => {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const solution = (input) => {
  const [N, K] = input[0].split(" ").map(Number);
  const kkwaegkkwaegTimes = input[1].split(" ").map(Number);
  let lastClapTime = kkwaegkkwaegTimes[0];
  let clap = 1;

  for (let i = 1; i < N; i++) {
    const current = kkwaegkkwaegTimes[i];
    if (lastClapTime+K < current) {
      clap++;
      lastClapTime = current;
    }
  }

  return clap;
}