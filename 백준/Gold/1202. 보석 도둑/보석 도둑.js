const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, K, jewel = [], bag = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, K]= input[0].split(' ').map(Number);
  const result = solution(input.slice(1));
  console.log(result);
  process.exit();
});

const solution = (input) => {
  let result = 0;
  for (let i = 0; i < N; i++) {
    jewel.push(input[i].split(' ').map(Number));
  } 

  for (let i = N; i < N+K; i++) {
    bag.push(Number(input[i]));
  }

  bag.sort((a, b) => a - b);
  jewel.sort((a, b) => a[0] - b[0]);

  const pq = new PriorityQueue();
  let index = 0;
  for (const b of bag) {
    while (index < N && jewel[index][0] <= b) {
      pq.push(jewel[index][1]);
      index++;
    }

    if (pq.size > 0) {
      result += pq.pop();
    }
  }

  return result;
}

class PriorityQueue {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  push(value) {
    this.heap.push(value);
    this.size++;
    this.upheap();
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    const popValue = this.heap[0];
    this.heap[0] = this.heap[this.size-1];
    this.heap.pop();
    this.size--;
    this.downheap();
    return popValue;
  }
  
  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  upheap() {
    let index = this.size-1;

    while (index > 0) {
      const parent = Math.floor((index-1)/2);

      if (this.heap[index] < this.heap[parent]) {
        break;
      }

      this.swap(index, parent);
      index = parent
    }
  }

  downheap() {
    let index = 0;

    while (index*2+1 < this.size) {
      let child = index*2+1;

      if (child < this.size-1 && this.heap[child] < this.heap[child+1]) {
        child++;
      }

      if (this.heap[index] > this.heap[child]) {
        break;
      }

      this.swap(index, child);
      index = child;
    }
  }
}