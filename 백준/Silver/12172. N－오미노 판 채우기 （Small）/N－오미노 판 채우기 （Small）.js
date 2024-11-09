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

  for (let i = 1; i < T+1; i++) {
    const [X, R, C] = input[i].split(" ").map(Number);
    
    if (X === 1) {
      result.push(`Case #${i}: GABRIEL`);
    } else if (X === 2) {
      if (R*C % 2 === 0) {
        result.push(`Case #${i}: GABRIEL`);
      } else {
        result.push(`Case #${i}: RICHARD`);
      }
    } else if (X === 3) {
      if (
        R*C % 3 === 0 &&
        (R >= 3 && C >= 2 || R >= 2 && C >= 3)
      ) {
        result.push(`Case #${i}: GABRIEL`);
      } else {
        result.push(`Case #${i}: RICHARD`);
      }
    } else if (X === 4) {
      if (
        R*C % 4 === 0 && 
        (R >= 4 && C >= 3 || R >= 3 && C >= 4)
      ) {
        result.push(`Case #${i}: GABRIEL`);
      } else {
        result.push(`Case #${i}: RICHARD`);
      }
    }
  }

  return result;
}