function maxProfitMutipleTransactions(prices) {
    let answerProfit = 0;
    
    for (let i=1; i<prices.length; i++) {
        let currentProfit = prices[i]-prices[i-1];
        if (currentProfit > 0) {
            answerProfit += currentProfit;
        }
    }
    return answerProfit;
};