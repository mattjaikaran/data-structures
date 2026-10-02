/**
 * 🟡 findMinCostConnectSticks (LC #1167)
 * @param {number[]} sticks
 * @returns {number}
 */
export function findMinCostConnectSticks(sticks) {
  sticks = [...sticks].sort((a,b)=>a-b);
  let cost = 0;
  const push = (v) => { sticks.push(v); sticks.sort((a,b)=>a-b); };
  while (sticks.length > 1) {
    const a = sticks.shift(), b = sticks.shift();
    cost += a + b; push(a + b);
  }
  return cost;
}
