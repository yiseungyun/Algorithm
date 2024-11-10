const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  let resultArray = [];
  for (let i = 0; i < result.length; i++) {
    resultArray.push(result[i].join(""));
  };
  console.log(resultArray.join("\n"));
  process.exit();
});

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const [a, b] = input[1].split(" ").map(Number);

  // N행 M열의 배열 생성
  let field = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => "")
  );
  
  // a 행을 제외한 행 채우기
  if (a === 0) {
    for (let i = 1; i < N; i++) {
      for (let j = 0; j < M; j++) {
        field[i][j] = 'N';
      }
    }
  } else if (a === N-1) {
    for (let i = 0; i < N-1; i++) {
      for (let j = 0; j < M; j++) {
        field[i][j] = 'S';
      }
    }
  } else {
    for (let i = 0; i < a; i++) {
      for (let j = 0; j < M; j++) {
        field[i][j] = 'S';
      }
    }
    for (let i = a+1; i < N; i++) {
      for (let j = 0; j < M; j++) {
        field[i][j] = 'N';
      }
    }
  }

  
  for (let j = 0; j < b; j++) {
    field[a][j] = 'E';
  }
  field[a][b] = 'E';
  for (let j = b+1; j < M; j++) {
    field[a][j] = 'W';
  }

  return field;
}