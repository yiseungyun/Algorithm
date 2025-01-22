const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;

readline.on('line', (line) => {
  input = line;
}).on('close', () => {
  const [N, K, A, B] = input.split(" ").map(Number);
  const result = solution(N, K, A, B);
  console.log(result);
  process.exit();
});

const solution = (N, K, A, B) => {
  let day = 1;
  let minPot = K;
  let index = 0;
  let pots = new Array(N).fill(K);

  while (minPot !== 0) {
    for (let i = 0; i < N; i++) {
      pots[i] = i < index+A ? pots[i]+B-1 : pots[i]-1;
    }
    index = (index+A)%N;
    minPot = Math.min(...pots);
    if (minPot !== 0) day++;
  }

  return day;
}