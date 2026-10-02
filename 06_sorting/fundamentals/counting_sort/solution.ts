export const countingSort = (arr: number[]): number[] => {
  if(!arr.length) return [];
  const k=Math.max(...arr)+1; const cnt=new Array(k).fill(0);
  for(const n of arr) cnt[n]++;
  return cnt.flatMap((c,v)=>new Array(c).fill(v));
};
