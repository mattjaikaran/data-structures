/**
 * 🟡 bestTimeCooldown (LC #309)
 * @param {number[]} prices
 * @returns {number}
 */
export function bestTimeCooldown(prices) {
  let [held,sold,idle]=[-Infinity,0,0];
  for(const p of prices) [held,sold,idle]=[Math.max(held,idle-p),held+p,Math.max(idle,sold)];
  return Math.max(sold,idle);
}
