function maxProfit(prices) {
    let minStockPrice = Infinity,
        maxAnswer = 0;
    
    for(let i=0; i<prices.length; i++) {
        minStockPrice = Math.min(minStockPrice, prices[i]);
        maxAnswer = Math.max(maxAnswer, prices[i]-minStockPrice);
    }
    return maxAnswer;
};