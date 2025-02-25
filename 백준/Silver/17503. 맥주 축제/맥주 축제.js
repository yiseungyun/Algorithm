const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M, K, beers;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M, K] = input[0].split(' ').map(Number);
  beers = input.slice(1).map(i => i.split(' ').map(Number));
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let minLevel = Infinity;
  beers.sort((a, b) => a[1] - b[1]);
  let left = 0;
  let right = beers.length-1;

  while (left <= right) {
    const mid = Math.floor((left+right)/2);
    if (mid < N-1) {
      left++;
      continue;
    }
    let newList = beers.slice(0, mid+1);
    newList.sort((a, b) => b[0] - a[0]);
    let sum = 0;

    for (let i = 0; i < N; i++) {
      sum += newList[i][0];
    }

    if (sum >= M) {
      minLevel = Math.min(minLevel, beers[mid][1]);
      right = mid-1;
    } else {
      left = mid+1;
    }
  }

  return minLevel === Infinity ? -1 : minLevel;
}
