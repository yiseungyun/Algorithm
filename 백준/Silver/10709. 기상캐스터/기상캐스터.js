const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  result.forEach(row => {
    console.log(row.join(" "));
  });
  process.exit();
});

const solution = (input) => {
  const [H, W] = input.shift().split(" ").map(Number);
  let result = Array.from({ length: H }, () => []);

  for (let i = 0; i < H; i++) {
    let cloud = -1;
    for (let j = 0; j < W; j++) {
      if (input[i][j] === 'c') {
        result[i].push(0);
        cloud = j;
      } else {
        cloud === -1 ? result[i].push(-1) : result[i].push(j-cloud);
      }
    }
  }

  return result;
}