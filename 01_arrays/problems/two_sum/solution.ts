/** 🟢 Two Sum (LC #1) — O(n) time, O(n) space */
export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (seen.has(comp)) return [seen.get(comp)!, i];
    seen.set(nums[i], i);
  }
  return [];
}
