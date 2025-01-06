/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = -1;
    let profit = 0;

    for (let i = 0; i < prices.length-1; i++) {
        if (prices[i] < prices[i+1] && buy === -1) {
            buy = prices[i];
        } else if (prices[i] > prices[i+1] && buy !== -1) {
            profit += (prices[i]-buy);
            buy = -1;
        }
    }

    if (buy !== -1) {
        profit += (prices[prices.length-1]-buy);
    }

    return profit;
};