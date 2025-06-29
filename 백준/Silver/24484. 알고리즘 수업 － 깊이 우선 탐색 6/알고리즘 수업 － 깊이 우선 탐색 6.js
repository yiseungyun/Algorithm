const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M, R;
let graph, visited;
let visitNum = 1;
let depth = 0;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M, R] = input[0].split(" ").map(Number);
  graph = Array.from({ length: N+1 }, () => new Array());
  visited = new Array(N+1).fill(false);
  d = new Array(N+1).fill(-1);
  t = new Array(N+1).fill(0);
  for (let i = 1; i < M+1; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  for (let g of graph) {
    g = g.sort((a, b) => b - a);
  }
  console.log(solution());
  process.exit();
});

const dfs = (node, depth) => {
  visited[node] = true;
  t[node] = visitNum;
  visitNum += 1;
  d[node] = depth;
  for (const adj of graph[node]) {
    if (!visited[adj]) {
      dfs(adj, depth + 1);
    }
  }
}

const solution = () => {
  dfs(R, 0);
  let result = 0;
  for (let i = 1; i < N+1; i++) {
    result += d[i]*t[i];
  }
  return result;
}