/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var DP = new Array(n+1);
    DP[0] = 1;
    DP[1] = 1;
    for (let i = 2; i < n+1; i++) {
        DP[i] = DP[i-2]+DP[i-1];
    }
    return DP[n];
};
