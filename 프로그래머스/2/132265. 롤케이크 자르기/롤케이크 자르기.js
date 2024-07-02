function solution(topping) {
    let visited = {};
    let DP = Array.from(Array(2), () => Array(topping.length+1).fill(0));
    
    for (let i = 0; i < topping.length; i++) {
        if (!visited[topping[i]]) {
            DP[0][i+1] = DP[0][i] + 1;
            visited[topping[i]] = true;
        } else {
            DP[0][i+1] = DP[0][i];
        }
    }
    visited = {};
    for (let i = topping.length-1; i >= 0; i--) {
        if (!visited[topping[i]]) {
            DP[1][i] = DP[1][i+1] + 1;
            visited[topping[i]] = true;
        } else {
            DP[1][i] = DP[1][i+1];
        }
    }
    
    const toppingCount = DP[0][topping.length];
    let result = 0;
    for (let i = 1; i < topping.length+1; i++) {
        if (DP[0][i] === DP[1][i]) {
            result++;
        }
    }
    return result;
}