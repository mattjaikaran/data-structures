/** 🟢 Move Zeroes (LC #283) — O(n) time, O(1) space */
export function moveZeroes(nums: number[]): void {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
}
