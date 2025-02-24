const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let T;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  T = Number(input[0]);
  const result = solution(input.slice(1));
  console.log(result.join('\n'));
  process.exit();
});

const solution = (input) => {
  let index = 0;
  let result = [];

  for (let i = 0; i < T; i++) {
    const [W, N] = input[index++].split(' ').map(Number);
    let info = [];
    for (let j = 0; j < N; j++) {
      info.push(input[index+j].split(' ').map(Number));
    }

    index += N;

    let move = 0;
    let car = 0;
    let k = 0;
    let loc, trash;
    while (k < N) {
      [loc, trash] = info[k];
      if (car+trash < W) { // 실을 수 있는 상태라면? 싣고 다음으로 이동
        car += trash; // 쓰레기를 실음
        k++; // 다음으로 이동
      } else if (car+trash === W) { // 싣자마자 딱 맞다면?
        move += 2*loc; // 쓰레기장으로 돌아가고
        car = 0; // 차를 비워주고
        k++; // 다음 칸으로 이동
      } else { // 실었는데 넘는다면?
        move += 2*loc; // 쓰레기장으로 돌아가고
        car = 0; // 차를 비워줌
      }
    }

    if (car > 0) {
      move += loc*2;
    }

    result.push(move);
  }

  return result;
}
