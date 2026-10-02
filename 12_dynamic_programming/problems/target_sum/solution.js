/**
 * 🟡 targetSum (LC #494)
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
export function targetSum(nums, target) {
  let dp = new Map([[0,1]]);
  for(const n of nums){
    const ndp=new Map();
    for(const [s,cnt] of dp){
      ndp.set(s+n,(ndp.get(s+n)??0)+cnt);
      ndp.set(s-n,(ndp.get(s-n)??0)+cnt);
    }
    dp=ndp;
  }
  return dp.get(target)??0;
}
