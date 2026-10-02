/** 🟡 Search in Rotated Sorted Array (LC #33) — O(log n) time */
export function searchRotated(nums: number[], target: number): number {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[l] <= nums[mid]) {           // left half sorted
      if (nums[l] <= target && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else {                              // right half sorted
      if (nums[mid] < target && target <= nums[r]) l = mid + 1;
      else r = mid - 1;
    }
  }
  return -1;
}
