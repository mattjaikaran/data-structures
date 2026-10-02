/**
 * 🟡 subsets (LC #78)
 * @param {number[]} nums
 * @returns {number[][]}
 */
export function subsets(nums) {
  const result = [];
  const bt = (start, path) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); bt(i + 1, path); path.pop();
    }
  };
  bt(0, []); return result;
}
