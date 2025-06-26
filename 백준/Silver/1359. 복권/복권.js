const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let N, M, K;

readline.on('line', (line) => {
  [N, M, K] = line.split(" ").map(Number);
}).on('close', () => {
  console.log(solution());
  process.exit();
});

const solution = () => {
  const array = Array.from({length : N}, (_, i) => i+1);
  const combList = combination(array, M);

  const 전체_경우 = combList.length*combList.length;
  let 일치_경우 = 0;

  for (const 선택 of combList) {
    for (const 복권 of combList) {
      if (K개가_일치(선택, 복권, K)) {
        일치_경우 += 1;
      }
    }
  }

  return 일치_경우/전체_경우;
}

const combination = (arr, selectCount) => {
  const result = [];

  function bactrack(start, path) {
    if (path.length === selectCount) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      bactrack(i+1, path);
      path.pop();
    }
  }

  bactrack(0, [])
  return result;
}

const K개가_일치 = (선택, 복권, K) => {
  let count = 0;
  
  for (const num of 선택) {
    if (복권.includes(num)) {
      count += 1;
    }
  }

  return count >= K ? true : false;
}