function solution(n, computers) {
    let network = 0;
    let visited = new Array(n+1).fill(false);

    for (let i = 1; i < n+1; i++) {
        if (!visited[i]) {
            dfs(computers, i, visited);
            network++;
        }
    }
    
    return network;
}

function dfs(computers, node, visited) {
    visited[node] = true;
    for (let i = 0; i < computers[node-1].length; i++) {
        if (computers[node-1][i] === 1 && i !== node-1 && !visited[i+1]) {
            dfs(computers, i+1, visited);
        }
    }
}