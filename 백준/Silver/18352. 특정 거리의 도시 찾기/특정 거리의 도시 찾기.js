const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M, K, X;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M, K, X] = input[0].split(' ').map(Number);
  const result = solution(input.slice(1));
  console.log(result.join('\n'));
  process.exit();
});

const solution = (input) => {
  let graph = Array.from(Array(N+1), () => []);
  let visited = new Array(N+1).fill(false);

  for (const edge of input) {
    const [a, b] = edge.split(' ').map(Number);
    graph[a].push(b);
  }

  let queue = [X];
  let next, cities;
  let distance = -1;

  while (distance < K) {
    next = [];
    cities = [];
    distance++;
    while (queue.length > 0) {
      const city = queue.pop();
      if (!visited[city]) {
        cities.push(city);
      }
      visited[city] = true;
      for (const n of graph[city]) {
        if (!visited[n]) next.push(n);
      }
    }
    queue = [...next];
  }

  return cities.length === 0 ? [-1] : cities.sort((a, b) => a - b);
}