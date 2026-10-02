export function targetSum(nums: number[], target: number): number {
  let dp: Map<number,number> = new Map([[0,1]]);
  for(const n of nums){
    const ndp=new Map<number,number>();
    for(const [s,cnt] of dp){
      ndp.set(s+n,(ndp.get(s+n)??0)+cnt);
      ndp.set(s-n,(ndp.get(s-n)??0)+cnt);
    }
    dp=ndp;
  }
  return dp.get(target)??0;
}
