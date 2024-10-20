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
  let [A, B] = input.split(" ").map(item => Number(item));
  let count = 0;
  
  while (A < B) {
    if (B % 2 === 0) {
      B = Math.floor(B/2);
      count++;
    } else if (B % 10 === 1) {
      B = Math.floor(B / 10);
      count++;
    } else {
      return -1;
    }
  }

  return A === B ? count+1 : -1;
}