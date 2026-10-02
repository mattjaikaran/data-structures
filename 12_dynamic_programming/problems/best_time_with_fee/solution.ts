export function bestTimeWithFee(prices: number[], fee: number): number {
  let [cash,held]=[0,-prices[0]];
  for(let i=1;i<prices.length;i++){cash=Math.max(cash,held+prices[i]-fee);held=Math.max(held,cash-prices[i]);}
  return cash;
}
