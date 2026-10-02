/**
 * Rotate array right by k steps. In-place.
 * O(n) time, O(1) space — reversal trick.
 * @param {number[]} nums
 * @param {number} k
 */
export function rotateRight(nums, k) {
  const n = nums.length;
  k = k % n;
  const rev = (l, r) => {
    while (l < r) { [nums[l], nums[r]] = [nums[r], nums[l]]; l++; r--; }
  };
  rev(0, n - 1);
  rev(0, k - 1);
  rev(k, n - 1);
}
