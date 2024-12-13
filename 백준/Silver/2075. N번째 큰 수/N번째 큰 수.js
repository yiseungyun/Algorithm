const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let N, pq;

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(item) {
    this.heap.push(item);
    let index = this.size() - 1;
    while (index > 0 && this.heap[index] < this.heap[Math.floor((index-1)/2)]) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[Math.floor((index-1)/2)];
      this.heap[Math.floor((index-1)/2)] = temp;
      index = Math.floor((index-1)/2);
    }
  }

  pop() {
    if (this.size() === 0) return null;
    
    const item = this.heap[0];
    if (this.size() === 1) {
      this.heap.pop();
      return item;
    }
    
    this.heap[0] = this.heap.pop();
    let index = 0;
    
    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let minIndex = index;
      
      if (left < this.size() && this.heap[left] < this.heap[minIndex]) {
        minIndex = left;
      }
      
      if (right < this.size() && this.heap[right] < this.heap[minIndex]) {
        minIndex = right;
      }
      
      if (minIndex === index) break;
      
      let temp = this.heap[index];
      this.heap[index] = this.heap[minIndex];
      this.heap[minIndex] = temp;
      index = minIndex;
    }
    
    return item;
  }
}

readline.on('line', (line) => {
  if (!N) {
    N = Number(line);
    pq = new MinHeap(N);
  } else {
    line.split(" ").map(Number).forEach((value) => {
      pq.push(value);
      if (pq.size() > N) pq.pop();
    });
  }
}).on('close', () => {
  console.log(pq.heap[0]);
  process.exit();
});