function maxProfit(prices) {
	let profit = 0;
	for (let i = 0; i <= prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			const currProfit = prices[j] - prices[i];

			if (currProfit > profit) {
				profit = currProfit;
			}
		}
	}
	return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
