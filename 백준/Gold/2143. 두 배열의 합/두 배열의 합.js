const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let T, Alength, Blength, A, B;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  T = Number(input[0]);
  [Alength, Blength] = [Number(input[1]), Number(input[3])];
  A = input[2].split(' ').map(Number);
  B = input[4].split(' ').map(Number);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let result = 0;
  const dictA = {};

  let length = 1;
  while (length <= Alength) {
    for (let i = 0; i < Alength-length+1; i++) {
      let sum = 0;
      for (let j = i; j < i+length; j++) {
        sum += A[j];
      }
      if (dictA[sum]) {
        dictA[sum]++;
      } else {
        dictA[sum] = 1;
      }
    }
    length++;
  }

  length = 1;
  while (length <= Blength) {
    for (let i = 0; i < Blength-length+1; i++) {
      let sum = 0;
      for (let j = i; j < i+length; j++) {
        sum += B[j];
      }
      result += (dictA[T-sum] ? dictA[T-sum] : 0);
    }
    length++;
  }

  return result;
}