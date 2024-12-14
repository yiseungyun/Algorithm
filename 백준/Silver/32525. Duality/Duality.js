const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(Number(input[0]), input.slice(1));
  console.log(result.join("\n"));
  process.exit();
});

const solution = (T, input) => {
  let result = [];
  let N = Number(input[0]);
  let start = 1;
  for (let i = 0; i < T; i++) {
    let currentIndex = 1;
    let coordinates = input.slice(start, start+N).map(coordinate => {
      return coordinate.split(" ").map(Number);
    })

    let newCoordinates = [];
    coordinates.forEach(coordinate => {
      newCoordinates.push(`${currentIndex++} ${coordinate[0]+1} ${coordinate[1]+2*(10**8)+1}`);
    });

    result.push(newCoordinates.join("\n"));

    start = start+N+1;
    N = Number(input[start-1]);
  }

  return result;
}