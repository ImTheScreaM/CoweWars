function maxProfit(prices) {
	if (prices.length <= 0) return 0
	let minBuy = prices[0]
	let maxProfit = 0
	for (let i = 1; i < prices.length; i++) {
		minBuy = Math.min(minBuy, prices[i])
		maxProfit = Math.max(maxProfit, prices[i] - minBuy)
	}
	return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
