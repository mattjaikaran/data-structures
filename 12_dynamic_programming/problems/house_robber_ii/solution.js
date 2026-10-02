/**
 * 🟡 houseRobberII (LC #213)
 * @param {number[]} nums
 * @returns {number}
 */
export function houseRobberII(nums) {
  const rob = (arr) => { let [a,b]=[0,0]; for(const n of arr)[a,b]=[b,Math.max(b,a+n)]; return b; };
  return Math.max(nums[0], rob(nums.slice(0,-1)), rob(nums.slice(1)));
}
