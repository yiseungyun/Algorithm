const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let N, gene;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = Number(input[0]);
  gene = input[1].split(' ');
  const result = solution();
  console.log(result.join('\n'));
  process.exit();
});

const solution = () => {
  const genes = {};
  const geneList = [];

  for (const g of gene) {
    if (!genes[g] || genes[g] <= 1) {
      genes[g] = (genes[g] || 0) + 1;
    }
  }
  
  for (const g in genes) {
    for (let i = 0; i < genes[g]; i++) {
      geneList.push(g);
    }
  }

  const genesCount = {};

  for (let i = 0; i < geneList.length; i++) {
    for (let j = 0; j < geneList.length; j++) {
      if (i === j) continue;
      const first = geneList[i][0];
      const second = geneList[j][1];
      if (first > second) {
        genesCount[first] = (genesCount[first] || 0) + 1;
      } else {
        genesCount[second] = (genesCount[second] || 0) + 1;
      }
    }
  }

  return [Object.keys(genesCount).length, Object.keys(genesCount).sort((a, b) => a > b ? 1 : -1).join(' ')];
}
