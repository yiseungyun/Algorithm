const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let n, m, map = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [n, m] = input[0].split(' ').map(Number);
  for (let i = 0; i < n; i++) {
    map.push(input[1+i].split(' ').map(Number));
  }
  const result = solution();
  console.log(result.map(row => row.join(' ')).join('\n'));
  process.exit();
});

const solution = () => {
  let result = Array.from({ length: n }, () => new Array(m).fill(-1));
  let visited = Array.from({ length: n }, () => new Array(m).fill(false));
  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 2) {
        result[i][j] = 0;
        visited[i][j] = true;
        queue.push([i, j, 0]);
      } else if (map[i][j] === 0) {
        result[i][j] = 0;
      }
    }
  }

  const distance = [[1, 0], [0, 1], [-1, 0], [0, -1]];

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();
    for (const d of distance) {
      const newX = x+d[0];
      const newY = y+d[1];
      if (newX >= 0 && newX < n && newY >= 0 && newY < m && !visited[newX][newY]) {
        if (map[newX][newY] !== 0) {
          queue.push([newX, newY, dist+1]);
          result[newX][newY] = dist+1;
        }
        visited[newX][newY] = true;
      }
    }
  }

  return result;
}
