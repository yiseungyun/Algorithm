/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var DP = new Array(triangle.length);
    for (let i = 0; i < DP.length; i++) {
        DP[i] = new Array(i+1).fill(10**4+1);
    }
    DP[0][0] = triangle[0][0];
    for (let i = 1; i < DP.length; i++) {
        for (let j = 0; j < DP[i].length; j++) {
            if (j >= 1 && j < DP[i].length-1) DP[i][j] = Math.min(DP[i-1][j-1]+triangle[i][j], DP[i-1][j]+triangle[i][j]);
            else if (j === 0) DP[i][j] = DP[i-1][j]+triangle[i][j];
            else DP[i][j] = DP[i-1][j-1]+triangle[i][j];
        }
    }
    return Math.min(...DP[DP.length-1]);
};