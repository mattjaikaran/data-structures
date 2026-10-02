export function findMinCostConnectSticks(sticks: number[]): number {
  // Simple min-heap simulation
  sticks = [...sticks].sort((a,b)=>a-b);
  let cost = 0;
  const push = (v: number) => { sticks.push(v); sticks.sort((a,b)=>a-b); };
  while (sticks.length > 1) {
    const a = sticks.shift()!, b = sticks.shift()!;
    cost += a + b; push(a + b);
  }
  return cost;
}
