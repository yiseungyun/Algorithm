const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let T, visited;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  T = Number(input[0]);
  const result = solution(input.slice(1));
  console.log(result.join('\n'));
  process.exit();
});

const solution = (input) => {
  let result = [];

  for (let t = 0; t < T; t++) {
    let count = 0;
    const N = Number(input[2*t]);
    const students = input[2*t+1].split(' ').map(Number);

    visited = Array.from({ length: N + 1 }, () => false);
    for (let i = 1; i <= N; i++) {
      if (!visited[i]) { 
        count += findCycle(i, students);
      }
    }
    result.push(N - count);
  }

  return result;
}

const findCycle = (start, students) => {
  const tempVisited = new Set();
  let current = start;

  while (!visited[current]) {
    visited[current] = true;
    tempVisited.add(current);
    current = students[current-1];
  }

  if (tempVisited.has(current)) {
    let cycleSize = 1;
    let cycleNode = students[current-1];

    while (cycleNode !== current) {
      cycleSize++;
      cycleNode = students[cycleNode-1];
    }
    return cycleSize;
  }
  
  return 0;
}