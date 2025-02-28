const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M, K, candy, candyList = [], sum = 0;
let visited;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M, K] = input[0].split(' ').map(Number);
  candy = [0, ...input[1].split(' ').map(Number)];
  visited = new Array(N+1).fill(false);

  const result = solution(input.slice(2));
  console.log(result);
  process.exit();
});

const solution = (info) => {
  let graph = Array.from({ length: N+1 }, () => new Array());
  let group = [];
  
  for (let i = 0; i < M; i++) {
    let [a, b] = info[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      candyList = [];
      sum = 0;
      dfs(i, graph);
      if (candyList.length < K) group.push([candyList.length, sum]); 
    }
  }

  if (group.length === 0) return 0;

  group.sort((a, b) => a[0] - b[0]);
  let DP = Array.from({length: group.length}, () => new Array(K).fill(0));
 
  for (let i = 1; i < K; i++) {
    if (group[0][0] <= i) DP[0][i] = group[0][1];
  }

  for (let i = 1; i < group.length; i++) {
    for (let j = 1; j < K; j++) {
      if (j >= group[i][0]) {
        DP[i][j] = Math.max(DP[i-1][j-group[i][0]]+group[i][1], DP[i-1][j]);
      } else {
        DP[i][j] = DP[i-1][j];
      }
    }
  }

  return DP[group.length-1][K-1];
}

const dfs = (node, graph) => {
  visited[node] = true;
  candyList.push(candy[node]);
  sum += candy[node];

  for (const adj of graph[node]) {
    if (!visited[adj]) {
      dfs(adj, graph, sum);
    }
  }
}