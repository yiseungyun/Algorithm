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

  questions.forEach(question => {
    result.push(interviewCount(students, question, K, Q));
  });

  return result;
}

const interviewCount = (students, question, K, Q) => {
  let length = 0;
  let result = 0;

  for (let i = 0; i < question; i++) {
    if (students[i] !== K) {
      length++;
    } else {
      result += getInterviewCount(length);
      length = 0;
    }
  }

  result += getInterviewCount(length);

  return result;
}

const getInterviewCount = (length) => {
  let result = 0;
  for (let i = 1; i <= length; i++) {
    result += (length-i+1);
  }

  return result;
}