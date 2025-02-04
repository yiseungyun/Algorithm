const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = Number(input[0]);
  const result = solution(input.slice(1));
  console.log(result.join('\n'));
  process.exit();
});

const solution = (input) => {
  let result = [];
  const heap = new MeanHeap();

  for (let i = 0; i < N; i++) {
    const number = Number(input[i]);
    if (number === 0) {
      const value = heap.pop();
      result.push(value === null ? 0 : value);
    } else {
      heap.push(number);
    }
  }
  
  return result;
}

class MeanHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  push(item) {
    this.items.push([Math.abs(item), item > 0 ? 1 : -1]);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }

    const min = this.items[0];
    this.items[0] = this.items[this.size()-1];
    this.items.pop();
    this.bubbleDown();
    return min[0]*min[1];
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index-1)/2);
      if (this.items[parentIndex][0] < this.items[index][0]
        || (this.items[parentIndex][0] === this.items[index][0] && this.items[parentIndex][1] < this.items[index][1])) {
          break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index*2 + 1 < this.size()) {
      let leftChild = index*2+1;
      let rightChild = index*2+2;
      let minChild = leftChild;
      if (rightChild < this.size()) {
        if (this.items[rightChild][0] < this.items[leftChild][0]
          || (this.items[rightChild][0] === this.items[leftChild][0] && this.items[rightChild][1] < this.items[leftChild][1])) {
          minChild = rightChild;
        }
      }

      if (this.items[index][0] < this.items[minChild][0]
        || (this.items[index][0] === this.items[minChild][0] && this.items[index][1] < this.items[minChild][1])) {
        break;
      }

      this.swap(index, minChild);
      index = minChild;
    }
  }
}