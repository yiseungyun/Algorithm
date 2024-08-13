/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
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