const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const solution = (input) => {
  let result = 0;
  const exist = {};
  input.shift();
  input.sort((a, b) => a.length - b.length);
  
  for (let i = 0; i < input.length; i++) {
    const word = input[i];
    exist[word] = exist[word] ? exist[word]+1 : 1;
    let flag = true;
    
    for (let j = i+1; j < input.length; j++) {
      const compare = input[j];
      if (word === compare.slice(0, word.length) && word !== compare) {
        flag = false;
        break;
      } else if (word === compare && exist[word] >= 1) {
        exist[word] -= 1;
        flag = true;
      }
    }
    if (flag && exist[word] === 1) {
      result++;
    }
  }

  return result;
}