export function maxProduct(nums: number[]): number {
  let [best, curMax, curMin] = [nums[0], nums[0], nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const [a, b] = [curMax, curMin];
    curMax = Math.max(nums[i], a*nums[i], b*nums[i]);
    curMin = Math.min(nums[i], a*nums[i], b*nums[i]);
    best = Math.max(best, curMax);
  }
  return best;
}
