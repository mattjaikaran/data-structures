/** 🟢 Contains Duplicate (LC #217) — O(n) time, O(n) space */
export function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}
