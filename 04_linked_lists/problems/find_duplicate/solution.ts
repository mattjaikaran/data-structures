/** 🟡 Find the Duplicate Number (LC #287) — Floyd's on array-as-list */
export function findDuplicate(nums: number[]): number {
  let slow = nums[0], fast = nums[0];
  do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow !== fast);
  slow = nums[0];
  while (slow !== fast) { slow = nums[slow]; fast = nums[fast]; }
  return slow;
}
