export function houseRobberII(nums: number[]): number {
  const rob = (arr: number[]) => { let [a,b]=[0,0]; for(const n of arr)[a,b]=[b,Math.max(b,a+n)]; return b; };
  return Math.max(nums[0], rob(nums.slice(0,-1)), rob(nums.slice(1)));
}
