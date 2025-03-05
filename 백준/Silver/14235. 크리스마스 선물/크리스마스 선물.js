const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let n;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  n = Number(input[0]);
  const result = solution(input.slice(1));
  console.log(result.join('\n'));
  process.exit();
});

const solution = (input) => {
  let result = [];
  const queue = new Queue();
  
  for (const i of input) {
    const [a, ...list] = i.split(' ').map(Number);
    
    if (a === 0) {
      const item = queue.pop();
      if (item) result.push(item);
      else result.push(-1);
    } else {
      for (const d of list) {
        queue.push(d);
      }
    }
  }

  return result;
}

class Queue {
  constructor() {
    this.heap = [];
    this.length = 0;
  }

  push(item) {
    this.heap.push(item);
    this.length++;
    this.bubbleUp();
  } 

  pop() {
    if (!this.isEmpty()) {
      const item = this.heap[0];
      this.heap[0] = this.heap[this.length-1];
      this.heap.pop();
      this.length--;

      this.bubbleDown();
  
      return item;
    }

    return null;
  }

  bubbleUp() {
    let index = this.length-1;

    while (index > 0) {
      let parent = Math.floor((index-1)/2);
      if (this.heap[parent] >= this.heap[index]) return;
      const temp = this.heap[parent];
      this.heap[parent] = this.heap[index];
      this.heap[index] = temp;

      index = parent;
    }
  }

  bubbleDown() {
    let index = 0;
    let leftChild = index*2+1, rightChild = index*2+2;
    while (this.length > leftChild) {
      let bigChild = leftChild;
      if (this.length > rightChild) {
        bigChild = this.heap[leftChild] < this.heap[rightChild] ? rightChild : leftChild;
      }

      if (this.heap[bigChild] >  this.heap[index]) {
        const temp = this.heap[bigChild];
        this.heap[bigChild] = this.heap[index];
        this.heap[index] = temp;
        index = bigChild;
      } else {
        return;
      }

      leftChild = index*2+1, rightChild = index*2+2;
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}