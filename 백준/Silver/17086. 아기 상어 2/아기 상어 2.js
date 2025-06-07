const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M;
let shark = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M] = input[0].split(" ").map(Number);
  for (let i = 1; i < N+1; i++) {
    shark.push(input[i].split(" ").map(Number));
  }

  console.log(solution());
  process.exit();
});

const solution = () => {
  let result = 0;
  let 상어_위치 = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (shark[i][j] === 1) {
        상어_위치.push([i, j])
        shark[i][j] = -1
      }
    }
  }

  const bfs = (visited, x, y) => {
    const d = [[0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
    let queue = [[x, y, 0]];
    
    while (queue.length > 0) {
      [curX, curY, distance] = queue.shift();

      for (const [dx, dy] of d) {
        const newX = curX+dx;
        const newY = curY+dy;
        if (newX < 0 || newX >= N || newY < 0 || newY >= M) continue
        if (visited[newX][newY] === false && shark[newX][newY] !== -1) {
          shark[newX][newY] = shark[newX][newY] === 0
            ? distance+1
            : (shark[newX][newY] < distance+1 ? shark[newX][newY]: distance+1);
          visited[newX][newY] = true;
          queue.push([newX, newY, distance+1]);
        }
      }
    }
  }

  for (const 위치 of 상어_위치) {
    let visited = Array.from({length: N}, () => new Array(M).fill(false));
    visited[위치[0]][위치[1]] = true;
    bfs(visited, 위치[0], 위치[1]);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      result = Math.max(result, shark[i][j]);
    }
  }
  
  return result;
}