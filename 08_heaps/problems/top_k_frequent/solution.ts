export function topKFrequent(nums: number[], k: number): number[] {
  const cnt = new Map<number,number>();
  for (const n of nums) cnt.set(n, (cnt.get(n)??0)+1);
  return [...cnt.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map(([n])=>n);
}
