/**
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buyPrice = prices[0]
    for(let i = 1 ; i<prices?.length ; i++) {
        const currPrice = prices[i];
        if(currPrice<buyPrice) {
            buyPrice = currPrice
        }
        profit = profit > currPrice-buyPrice ? profit : currPrice-buyPrice 
    }

    return profit;
};