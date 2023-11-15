//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description
function maxProfit1(prices: number[]): number {
    let totalProfit=0;
    if (prices.length < 2) return 0;
    for (let i = 0; i < prices.length; i++) {
        if(prices[i]<prices[i+1])totalProfit += (prices[i+1]-prices[i])
    }
    return totalProfit;
}

console.log(maxProfit1([1,2,3,4,5]))
