const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result.length);
  result.forEach(name => console.log(name));
  process.exit();
});

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const unheardUnseenPeople = new Set();
  let result = [];

  for (let i = 1; i < N+1; i++) {
    const name = input[i];
    unheardUnseenPeople.add(name);
  }

  for (let i = N+1; i < N+M+1; i++) {
    const name = input[i];
    if (unheardUnseenPeople.has(name)) {
      result.push(name);
    }
  }

  return result.sort();
}