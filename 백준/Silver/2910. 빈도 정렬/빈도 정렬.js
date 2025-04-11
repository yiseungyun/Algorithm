const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, C, sequence;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, C] = input[0].split(' ').map(Number);
  sequence = input[1].split(' ').map(Number);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => { 
  const count = {}; // 키: 숫자, 값: [빈도수, 순서] 
  let index = 0;

  for (const num of sequence) {
    if (count[num]) {
      count[num] = [count[num][0]+1, count[num][1]];
    } else {
      count[num] = [1, index++];
    }
  }
  
  let sorted = Object.entries(count).sort((a, b) => {
    if (b[1][0] === a[1][0]) {
      return a[1][1] - b[1][1];
    }
    return b[1][0] - a[1][0];
  });
 
  sorted = sorted.map(info => info[0]);
  let result = '';
  for (let i = 0; i < sorted.length; i++) {
    result += `${sorted[i]} `.repeat(count[sorted[i]][0]);
  }
  return result.trim();
}
