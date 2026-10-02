/** 🟢 Best Time to Buy and Sell Stock (LC #121) — O(n) time, O(1) space */
export function bestTimeBuySell(prices: number[]): number {
  let minPrice = Infinity, maxProfit = 0;
  for (const p of prices) {
    minPrice = Math.min(minPrice, p);
    maxProfit = Math.max(maxProfit, p - minPrice);
  }
  return maxProfit;
}
