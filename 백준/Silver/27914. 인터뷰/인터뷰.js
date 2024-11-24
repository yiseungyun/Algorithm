const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result.join("\n"));
  process.exit();
});

const solution = (input) => {
  const [N, K, Q] = input[0].split(" ").map(Number);
  const students = input[1].split(" ").map(Number);
  let questions = input[2].split(" ").map(Number);
  let result = [];
  const DP = interviewCount(students, N, K);

  questions.forEach(question => {
    result.push(DP[question-1]);
  });

  return result;
}

const interviewCount = (students, question, K) => {
  let length = 0;
  let result = 0;
  let DP = Array(question).fill(0);

  for (let i = 0; i < question; i++) {
    if (students[i] !== K) {
      length++;
    } else {
      result += (length * (length + 1)) / 2;
      length = 0;
    }

    DP[i] = result + ((length * (length + 1)) / 2);
  }

  return DP;
}