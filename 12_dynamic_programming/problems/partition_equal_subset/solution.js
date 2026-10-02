/**
 * 🟡 partitionEqualSubset (LC #416)
 * @param {number[]} nums
 * @returns {boolean}
 */
export function partitionEqualSubset(nums) {
  const total = nums.reduce((a,b)=>a+b,0);
  if (total%2) return false;
  const target=total/2;
  const dp=new Set([0]);
  for(const n of nums){for(const s of [...dp]) dp.add(s+n); if(dp.has(target)) return true;}
  return dp.has(target);
}
