export function twoCityScheduling(costs: number[][]): number {
  costs.sort((a, b) => (a[0]-a[1]) - (b[0]-b[1]));
  const n = costs.length / 2;
  return costs.slice(0,n).reduce((s,c)=>s+c[0],0) + costs.slice(n).reduce((s,c)=>s+c[1],0);
}
