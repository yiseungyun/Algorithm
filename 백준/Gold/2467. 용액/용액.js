const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(Number(input[0]), input[1].split(' ').map(Number));
  console.log(result.join(' '));
  process.exit();
});

const solution = (N, solutionList) => {
  let left = 0, right = N-1;
  let result = [solutionList[N-2], solutionList[N-1]];

  while (left !== right) {
    const current = solutionList[left]+solutionList[right];
    if (current < 0) {
      if (Math.abs(current) < Math.abs(result[0]+result[1])) {
        result = [solutionList[left], solutionList[right]];
      }
      left++;
    } else if (current > 0) {
      if (current < Math.abs(result[0]+result[1])) {
        result = [solutionList[left], solutionList[right]];
      }
      right--;
    } else {
      return [solutionList[left], solutionList[right]];
    }
  }

  return result;
}