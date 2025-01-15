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

const solution = (string) => {
  string = string.split("");
  let countOfA = string.filter((char) => char === 'a').length;
  let minCountOfB = Infinity;

  for (let i = 0; i < string.length; i++) {
    const countofB =
      i+countOfA < string.length
        ? string.slice(i, i+countOfA).filter((char) => char === 'b').length
        : string.slice(i, string.length).filter((char) => char === 'b').length
          + string.slice(0, i+countOfA-string.length).filter((char) => char === 'b').length;

    minCountOfB = Math.min(minCountOfB, countofB);
  }

  return minCountOfB;
}