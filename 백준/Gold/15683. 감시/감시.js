const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M, office = [];
let maxResult = 0;
let CCTV = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M] = input[0].split(' ').map(Number);
  for (let i = 0; i < N; i++) {
    office.push(input[1+i].split(' ').map(Number));
  }
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let count = 0;

  // CCTV 종류와 위치 저장
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (office[i][j] >= 1 && office[i][j] <= 5) {
        CCTV.push([office[i][j], i, j]);
      } else if (office[i][j] === 0) {
        count++;
      }
    }
  }

  visit(office, 0, 0);

  return count-maxResult;
}

const cctv = {
  1: [[0], [1], [2], [3]],
  2: [[0, 1], [2, 3]],
  3: [[0, 2], [0, 3], [1, 2], [1, 3]],
  4: [[0, 1, 2], [1, 2, 3], [0, 1, 3], [0, 2, 3]],
  5: [[0, 1, 2, 3]]
}

const dx = [0, 0, -1, 1]; 
const dy = [1, -1, 0, 0];

const visit = (office, sum, depth) => {
  if (CCTV.length === depth) {
    return maxResult = Math.max(sum, maxResult);
  }
  const [num, x, y] = CCTV[depth];
  let newOffice = office.map(row => [...row]);

  for (const i of cctv[num]) { // CCTV 번호에 따라 감시
    const tempSum = fill(i, newOffice, x, y);  
    visit(newOffice, sum+tempSum, depth+1);
    newOffice = office.map(row => [...row]); // 기록했던거 초기화
  }
}

const fill = (mode, office, x, y) => {
  let result = 0;

  for (const dir of mode) {
    let nx = x;
    let ny = y;
    while (true) {
      nx += dx[dir];
      ny += dy[dir];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M || office[nx][ny] === 6) break;
      if (office[nx][ny] >= 1 && office[nx][ny] <= 5) continue;
      if (office[nx][ny] === 0) {
        result++;
        office[nx][ny] = '#';
      }
    }
  }

  return result;
}