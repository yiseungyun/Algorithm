const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result.length);
  console.log(result.join(""));
  process.exit();
});

const solution = (input) => {
  let result = [];
  const str1 = input[0], str2 = input[1];
  let DP = Array.from({ length: str1.length + 1 }, () => new Array(str2.length + 1).fill(0));

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i-1] === str2[j-1]) {
        DP[i][j] = DP[i-1][j-1] + 1;
      } else {
        DP[i][j] = Math.max(DP[i][j-1], DP[i-1][j]);
      }
    }
  }

  let i = str1.length, j = str2.length;
  while (i > 0 && j > 0) {
    if (str1[i-1] === str2[j-1]) {
      result.push(str1[i-1]);
      i--; j--;
    } else if (DP[i-1][j] < DP[i][j-1]) {
      j--;
    } else {
      i--;
    }
  }

  return result.reverse();
}