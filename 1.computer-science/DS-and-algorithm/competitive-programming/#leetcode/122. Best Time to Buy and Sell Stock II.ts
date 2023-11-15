//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description
function maxProfit1(prices: number[]): number {
    let maxDiff = 0;
    let minVal = prices[0];
    if (prices.length < 2) return maxDiff;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minVal) minVal = prices[i];
        else if ((prices[i] - minVal) > maxDiff) maxDiff = prices[i] - minVal;
    }
    return maxDiff;
}
