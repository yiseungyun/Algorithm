const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const solution = (input) => {
  const N = Number(input[0]);
  const fruits = input[1].split(' ').map(Number);
  const types = {};

  if (N === 1) return 1;

  if (!types[fruits[0]]) types[fruits[0]] = 0;
  types[fruits[0]] += 1;
  if (!types[fruits[1]]) types[fruits[1]] = 0;
  types[fruits[1]] += 1;

  let result = Object.keys(types).length;
  let left = 0, right = 1;
  while (right < N) {
    if (Object.keys(types).length > 2) { 
      types[fruits[left]] -= 1; 
      if (types[fruits[left]] === 0) delete types[fruits[left]];
      left++; 
    } else {
      if (!types[fruits[right+1]]) types[fruits[right+1]] = 0;
      types[fruits[right+1]] += 1;
      right++;

      if (Object.keys(types).length <= 2 && right < N) {
        result = Math.max(result, right-left+1);
      }
    }
  }

  return result;
}