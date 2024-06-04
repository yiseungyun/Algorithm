/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var DP = Array.from({length: n+1}, (_, i) => 0);
    DP[1] = 1;
    DP[2] = 2;
    for (let i = 3; i < n+1; i++) {
        DP[i] = DP[i-2] + DP[i-1];
    }
    return DP[n];
};