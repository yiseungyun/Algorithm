const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, string, result = -(2**31);

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = Number(input[0]);
  string = input[1];
  solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  dfs(0, 0);
}

const calculate = (a, b, operator) => {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
  }
}

const dfs = (index, currentSum) => {
  if (index >= N) {
    result = Math.max(result, currentSum);
    return;
  }

  const operator = index === 0 ? '+' : string[index-1];

  if (index+2 < N) {
    const next = calculate(string[index], string[index+2], string[index+1]);
    dfs(index+4, calculate(currentSum, next, operator));
  }

  dfs(index+2, calculate(currentSum, string[index], operator));
}