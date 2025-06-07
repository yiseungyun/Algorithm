const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let N, number;

readline.on('line', (line) => {
  N = parseInt(line);
  number = line.split(' ').map(Number);
}).on('close', () => {
  console.log(solution().join(' '));
  process.exit();
});

const solution = () => {
  let DP = [0]
  let min = number[0]

  for (let i = 1; i < number.length; i++) {
    DP.push(
      DP[i-1] > number[i]-min ? DP[i-1] : number[i]-min
    )

    if (min > number[i]) min = number[i]
  }

  return DP;
}