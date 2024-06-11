// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(line));
}).on("close", function() {
	process.exit();
});

function solution(data) {
	data = data.split(" ");
	let count = 0;
	for (let i = 0; i < data.length; i++) {
		let word = data[i].replace(/^a-zA-Z/g, '');
		if (word.length >= 1) count++;
	}
	return count;
}