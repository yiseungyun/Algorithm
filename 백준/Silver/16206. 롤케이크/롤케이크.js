const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, M, cake;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, M] = input[0].split(' ').map(Number);
  cake = input[1].split(' ').map(Number);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => {
  let result = 0;
  let count = 0;
  cake.sort((a, b) => {
    const divA = a % 10 === 0;
    const divB = b % 10 === 0;
    if (divA === divB) return a - b;
    if (divA) return -1;
    return 1;
  })

  for (let c of cake) {
    if (c === 10) result++;
    else if (c > 10) {
      let cuts = c%10 === 0 ? Math.floor(c/10)-1 : Math.floor(c/10);
      if (count+cuts <= M) {
        result += (c%10 === 0 ? cuts+1 : cuts);
        count += cuts;
      } else {
        const possible = M-count;
        c -= (10*possible);
        result += possible;
        if (c === 10) result++;
        count = M;
      }
    }
  }

  return result;
}
