const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let N, K;
let array;
let input = [];
let list;
let count = 0;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, K] = input[0].split(" ").map(Number);
  array = input[1].split(" ").map(Number);
  console.log(solution());
  process.exit();
});

const heapSort = (array) => {
  const n = array.length;
  buildMinHeap(array, n);

  for (let i = n-1; i >= 0; i--) {
    [array[0], array[i]] = [array[i], array[0]]; // 최소값 맨 뒤로
    count += 1;
    if (count === K && array[i] !== array[0]) {
      list = [array[i], array[0]];
    }
    heapify(array, 0, i);
  }
}

const buildMinHeap = (array, n) => {
  for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
    heapify(array, i, n);
  }
}

const heapify = (A, i, n) => {
  let left = 2*i+1;
  let right = 2*i+2;
  let smallChild = i;

  if (right < n) {
    if (A[left] < A[right]) {
      smallChild = left;
    } else {
      smallChild = right;
    }
  } else if (left < n) {
    smallChild = left;
  } else {
    return;
  }

  if (A[smallChild] < A[i]) {
    [A[i], A[smallChild]] = [A[smallChild], A[i]];
    count += 1;
    if (count === K && A[i] !== A[smallChild]) {
      list = [A[i], A[smallChild]];
    }
    heapify(A, smallChild, n);
  }
}

const solution = () => {
  heapSort(array);
  return list === undefined ? -1 : list.join(" ");
}