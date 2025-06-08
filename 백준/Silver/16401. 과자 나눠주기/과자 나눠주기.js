const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let M, N;
let 과자_리스트;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [M, N] = input[0].split(" ").map(Number);
  과자_리스트 = input[1].split(" ").map(Number);

  console.log(solution());
  process.exit();
});

const solution = () => {
  let 최대_과자길이 = -1;
  let left = 1, right = Math.max(...과자_리스트);
  
  while (left <= right) {
    let mid = Math.floor((left+right)/2);
    let count = 0;

    for (let 과자 of 과자_리스트) {
      count += Math.floor(과자/mid);
    }

    if (count >= M) {
      left = mid+1;
      최대_과자길이 = Math.max(최대_과자길이, mid);
    } else {
      right = mid-1;
    }
  }

  return 최대_과자길이 === -1 ? 0 : 최대_과자길이;
}