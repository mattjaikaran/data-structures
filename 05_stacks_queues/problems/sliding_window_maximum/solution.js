/** 🔴 Sliding Window Maximum (LC #239) — monotonic deque
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
export function slidingWindowMaximum(nums, k) {
  const result = [],
    dq = [];
  for (let i = 0; i < nums.length; i++) {
    while (dq.length && dq[0] < i - k + 1) dq.shift();
    while (dq.length && nums[dq[dq.length - 1]] < nums[i]) dq.pop();
    dq.push(i);
    if (i >= k - 1) result.push(nums[dq[0]]);
  }
  return result;
}
