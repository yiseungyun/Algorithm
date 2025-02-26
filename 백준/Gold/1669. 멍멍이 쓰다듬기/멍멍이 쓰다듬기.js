const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let X, Y;

readline.on('line', (line) => {
  [X, Y] = line.split(' ').map(Number);
  readline.close();
}).on('close', () => {
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let diff = Y-X;
  if (diff === 0) return 0;
  if (diff === 1) return 1;
  if (diff === 2) return 2;
  if (diff === 3) return 3;

  let n = Math.ceil(Math.sqrt(diff));

  const mid = Math.floor((n**2-((n-1)**2))/2);
  if (diff <= (n-1)**2+mid) return 2*n-2;
  else return 2*n-1;
}
