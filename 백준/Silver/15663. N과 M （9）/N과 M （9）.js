const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let result = [], dict = {};
let N, M, array;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M] = input[0].split(' ').map(Number);
  array = input[1].split(' ').map(Number);
  const result = solution();
  console.log(result.join('\n'));
  process.exit();
});

const solution = () => {
  array.sort((a, b) => a - b);

  const visited = new Array(N).fill(false);
  backtraking([], visited);
 
  return result;
}

const backtraking = (save, visited) => {
  if (save.length === M) {
    if (!dict[save.join(' ')]) {
      result.push(save.join(' '));
      dict[save.join(' ')] = true;
    }
    return;
  } else if (save.length > M) {
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      backtraking([...save, array[i]], visited);
      visited[i] = false;
    } 
  }
}