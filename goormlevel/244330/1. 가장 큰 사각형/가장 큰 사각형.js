// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let data = [];
	for await (const line of rl) {
		data.push(line);
	}
	rl.close();
	console.log(solution(data));
	process.exit();
})();

function solution(data) {
	const T = Number(data[0]);
	let big = -1;
	for (let i = 1; i < T+1; i++) {
		let size = data[i].split(" ").map(Number);
		if (size[0]*size[1] > big) big = size[0]*size[1];
	}
	return big;
}