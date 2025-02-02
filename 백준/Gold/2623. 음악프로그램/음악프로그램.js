const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const [N, M] = input[0].split(' ').map(Number);
  const result = solution(N, M, input.slice(1));
  console.log(result.length !== N ? 0 : result.join('\n'));
  process.exit();
});

const solution = (N, M, orders) => {
  orders = orders.map(order => { return order.split(' ').map(Number) });
  let graph = Array.from({ length: N+1 }, () => []);
  let indegree = new Array(N+1).fill(0);
  let result = [];

  for (let order of orders) {
    order = order.slice(1);
    for (let i = 0; i < order.length-1; i++) {
      graph[order[i]].push(order[i+1]);
      indegree[order[i+1]]++;
    }
  }

  let queue = [];
  for (let i = 1; i < N+1; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const node = queue.pop(0);
    result.push(node);
    for (const next of graph[node]) {
      indegree[next]--;
      if (!indegree[next]) queue.push(next);
    }
  }
 
  return result;
}