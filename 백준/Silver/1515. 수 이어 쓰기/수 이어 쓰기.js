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
  let num = 1;
  let idx = 0;

  while (idx < input.length) {
    const numToString = num.toString();
    for (let i = 0; i < numToString.length; i++) {
      if (numToString[i] === input[idx]) {
        idx++;
      }
    }
    num++;
  }
  
  return num-1;
}