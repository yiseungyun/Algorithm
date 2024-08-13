/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let DP = Array.from({ length: prices.length }, () => 0);
    let max = 0;
    let buy = 10**4+1;

    prices.forEach((price, index) => {
        const profit = price-buy;
        if (buy > price) {
            buy = price;
        }
        if (profit > max) {
            max = profit;
        }
    });
    
    return max;
};