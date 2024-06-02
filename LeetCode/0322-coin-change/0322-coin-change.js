/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var DP = Array.from({length: amount+1}, (_, i) => 0);
    for (const coin of coins) {
        if (coin <= amount) DP[coin] = 1;
    }
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i-coin > 0) {
                DP[i] = DP[i] > 0 ?
                    (DP[i-coin] > 0 ? Math.min(DP[i-coin]+1, DP[i]) : DP[i]) 
                    : (DP[i-coin] > 0 ? DP[i-coin]+1 : -1);
            }
        }
    }
    if (amount === 0) return 0;
    return Math.min(...coins) > amount ? -1 : DP[amount];
};