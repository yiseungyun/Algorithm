const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  if (line === 'end') {
    readline.close();
  }
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const solution = (input) => {
  let resultList = [];

  for (const password of input) {
    const result = isAcceptable(password) ? 'acceptable' : 'not acceptable';
    resultList.push(`<${password}> is ${result}.`);
  }
  
  return resultList.join('\n');
}

const isAcceptable = (password) => {
  const vowels = { a: true, e: true, i: true, o: true, u: true};
  let existVowel = false;

  for (let i = 0; i < password.length; i++) {
    const first = password[i];
    const second = i+1 < password.length ? password[i+1] : null;
    const third = i+2 < password.length ? password[i+2] : null;

    if (vowels[first]) {
      existVowel = true;
      if (first === second && first !== 'e' && first !== 'o') {
        return false;
      }
      if (vowels[second] && vowels[third]) {
        return false;
      }
    } else {
      if (first === second) {
        return false;
      }
      if (second && third && !vowels[second] && !vowels[third]) {
        return false;
      }
    } 
  }

  return existVowel;
}