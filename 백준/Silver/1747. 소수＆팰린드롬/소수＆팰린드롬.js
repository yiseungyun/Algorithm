const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;

readline.on('line', (line) => {
  input = Number(line);
  readline.close();
}).on('close', () => {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const solution = (N) => {
  let isPrime = new Array(1100001).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i*i <= 1100000; i++) {
    if (isPrime[i]) {
      for (let j = i*i; j <= 1100000; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let num = N; num <= 1100000; num++) {
    if (isPrime[num] && isPalindrome(num)) {
      return num;
    }
  }
}

const isPalindrome = (number) => {
  let string = number.toString();
  const len = string.length;

  for (let i = 0; i < Math.floor(len/2); i++) {
    if (string[i] !== string[len-i-1]) {
      return false;
    }
  }
  return true;
}