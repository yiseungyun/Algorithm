const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, Q, actions;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  [N, Q] = input[0].split(' ').map(Number);
  actions = input.slice(1);
  const result = solution();
  console.log(result);
  process.exit();
});

const solution = () => { 
  let forward = [];
  let backward = [];
  let current = null;

  for (const action of actions) {
    const [command, ...page] = action.split(' ');
    if (command === 'F') { 
      if (forward.length > 0) {
        backward.push(current);
        current = forward.pop();
      }
    } else if (command === 'B') { 
      if (backward.length > 0) {
        forward.push(current);
        current = backward.pop();
      }
    } else if (command === 'A') {
      forward = [];
      if (current) backward.push(current);
      current = page[0];
    } else if (command === 'C') { 
      let newList = backward.length > 0 ? [backward[0]] : [];
      for (let i = 1; i < backward.length; i++) {
        if (backward[i-1] !== backward[i]) {
          newList.push(backward[i]);
        }
      }
      backward = [...newList];
    }
  }

  return [
    current,
    backward.length > 0 ? backward.reverse().join(' ') : -1,
    forward.length > 0 ? forward.reverse().join(' ') : -1
  ].join('\n');
}
