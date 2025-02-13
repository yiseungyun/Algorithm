const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M, X;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M, X] = input[0].split(' ').map(Number);
  const result = solution(input.slice(1));
  console.log(result);
  process.exit();
});

const solution = (input) => {
  let result = 0;
  let graph = Array.from({ length: N+1 }, () => new Array());
  let reverseGraph = Array.from({ length: N+1 }, () => new Array());
  let fromVtoX = new Array(N+1).fill(Infinity);
  let fromXtoV = new Array(N+1).fill(Infinity);

  for (const i of input) {
    const [a, b, time] = i.split(' ').map(Number);
    graph[a].push([b, time]);
    reverseGraph[b].push([a, time]);
  }

  // X에서 다른 정점으로 가는 최단 경로 구하기 : fromXtoV
  fromXtoV[X] = 0;
  const queue = new Queue();
  queue.push([X, 0]);
  let visited = new Array(N+1).fill(false);
  while (queue.size() > 0) {
    const [node, time] = queue.pop();
    visited[node] = true;
    for (const adj of graph[node]) {
      fromXtoV[adj[0]] = Math.min(fromXtoV[adj[0]], time+adj[1]);
      if (!visited[adj[0]]) queue.push([adj[0], time+adj[1]]);
    }
  }

  // V에서 X로 가는 최단 경로 구하기 : fromVtoX
  // X에서 다른 정점으로 가는 방법으로 한 번에 구하기 -> 대신 방향을 반대로 생각해서 푼다
  fromVtoX[X] = 0;
  queue.push([X, 0]);
  visited = new Array(N+1).fill(false);
  while (queue.size() > 0) {
    const [node, time] = queue.pop();
    visited[node] = true;
    for (const adj of reverseGraph[node]) {
      fromVtoX[adj[0]] = Math.min(fromVtoX[adj[0]], time+adj[1]);
      if (!visited[adj[0]]) queue.push([adj[0], time+adj[1]]);
    }
  }

  for (let i = 1; i <= N; i++) {
    result = Math.max(result, fromVtoX[i]+fromXtoV[i]);
  }

  return result;
}

class Queue {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return result;
  }
  
  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let index = this.heap.length-1
    while (index > 0) {
      const parentIndex = Math.floor((index-1)/2);
      if (this.heap[parentIndex][1] > this.heap[index][1]) {
        const temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[index];
        this.heap[index] = temp;
      }
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (true) {
      let minIndex = index;
      const left = 2*index+1;
      const right = 2*index+2;

      if (left < this.heap.length && this.heap[left][1] < this.heap[minIndex][1]) {
        minIndex = left;
      }

      if (right < this.heap.length && this.heap[right][1] < this.heap[minIndex][1]) {
        minIndex = right;
      }

      if (minIndex === index) break;
      const temp = this.heap[minIndex];
      this.heap[minIndex] = this.heap[index];
      this.heap[index] = temp;
      index = minIndex;
    }
  }
}