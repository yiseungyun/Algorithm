const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let count = 0;

readline.on('line', (line) => {
  input.push(line);
  count++;
  if (count === 2) {
    readline.close();
  }
}).on('close', () => {
  const [result, count] = solution(input);
  console.log(result === 0 ? "SAD" : result);
  if (result !== 0) {
    console.log(count);
  }
  process.exit();
});

const solution = (input) => {
  const [N, X] = input[0].split(" ").map(Number);
  const visitorList = input[1].split(" ").map(Number);
  let numOfVisitor = visitorList.slice(0, X).reduce((acc, curr) => acc + curr, 0);
  let maxNumOfVistor = numOfVisitor;
  let count = 1;

  for (let i = X; i < N; i++) {
    numOfVisitor = numOfVisitor - visitorList[i-X] + visitorList[i];
    if (numOfVisitor > maxNumOfVistor) {
      maxNumOfVistor = numOfVisitor;
      count = 1;
    } else if (numOfVisitor === maxNumOfVistor) {
      count++;
    }
  }
  
  return [maxNumOfVistor, count];
}