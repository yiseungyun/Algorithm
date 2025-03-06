const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, R, Q, graph, visited, DP;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, R, Q] = input[0].split(' ').map(Number);
  graph = Array.from({ length: N+1 }, () => new Array());
  visited = new Array(N+1).fill(false);
  const result = solution(input.slice(1));
  console.log(result.join('\n'));
  process.exit();
});

const solution = (input) => {
  let result = [];

  for (let i = 0; i < input.length-Q; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u); 
  }

  DP = new Array(N+1).fill(1);
  visited = new Array(N+1).fill(false);

  dfs(R);
  
  for (let i = input.length-Q; i < input.length; i++) {
    const query = Number(input[i]);
    result.push(DP[query]);
  }

  return result;
}

const dfs = (node) => {
  visited[node] = true;
  DP[node] = 1;

  for (const next of graph[node]) {
    if (!visited[next]) {
      DP[node] += dfs(next);
    }
  }

  return DP[node];
}