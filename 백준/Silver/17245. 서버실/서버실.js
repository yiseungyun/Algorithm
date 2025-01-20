const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const serverRoom = input.slice(1).map(array => array.split(" ").map(Number));
  const result = solution(Number(input[0]), serverRoom);
  console.log(result);
  process.exit();
});

const solution = (N, serverRoom) => {
  let maxCount = -1;
  let totalCount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (serverRoom[i][j] > maxCount) {
        maxCount = serverRoom[i][j];
      }
      totalCount += serverRoom[i][j];
    }
  }

  let left = 0, right = totalCount;
  while (left <= right) {
    const mid = Math.floor((left+right)/2);
    const count = sumOfComputers(mid, N, serverRoom);

    if (count > totalCount/2) {
      right = mid-1;
    } else if (count < totalCount/2) {
      left = mid+1;
    } else {
      return mid;
    }
  }

  return left;
}

const sumOfComputers = (H, N, serverRoom) => {
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      count += serverRoom[i][j] >= H ? H : serverRoom[i][j];
    }
  }

  return count;
}