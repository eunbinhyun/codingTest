/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let minBuyPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const profit = prices[i] - minBuyPrice;
        maxProfit = Math.max(profit, maxProfit);
        minBuyPrice = Math.min(minBuyPrice, prices[i]);
    }
    return maxProfit;
};
