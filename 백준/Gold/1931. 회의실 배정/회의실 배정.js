const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = Number(input[0]);
  const result = solution(N, input.slice(1));
  console.log(result);
  process.exit();
});

const solution = (N, meetings) => {
  meetings = meetings.map(meeting => meeting.split(" ").map(Number));
  meetings.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

  let rooms = 1;
  let end = meetings[0][1];

  for (let i = 1; i < N; i++) {
    if (meetings[i][0] >= end) {
      rooms++;
      end = meetings[i][1];
    }
  }
  
  return rooms;
}