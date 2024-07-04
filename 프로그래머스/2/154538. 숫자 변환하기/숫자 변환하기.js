function solution(x, y, n) {
    DP = Array.from({length: y+1}, (_, i) => 1000001);
    DP[x] = 0;
    for (let index=x; index < y; index++) {
        if (index+n <= y) DP[index+n] = Math.min(DP[index]+1, DP[index+n]);
        if (index*2 <= y) DP[index*2] = Math.min(DP[index]+1, DP[index*2]);
        if (index*3 <= y) DP[index*3] = Math.min(DP[index]+1, DP[index*3]);
    }
    return DP[y] === 1000001 ? -1 : DP[y];
}