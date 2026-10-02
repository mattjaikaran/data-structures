/**
 * 🟡 bestTimeWithFee (LC #714)
 * @param {number[]} prices
 * @param {number} fee
 * @returns {number}
 */
export function bestTimeWithFee(prices, fee) {
  let [cash,held]=[0,-prices[0]];
  for(let i=1;i<prices.length;i++){cash=Math.max(cash,held+prices[i]-fee);held=Math.max(held,cash-prices[i]);}
  return cash;
}
