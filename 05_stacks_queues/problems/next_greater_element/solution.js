/** 🟡 Next Greater Element I (LC #496)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export function nextGreaterElement(nums1, nums2) {
  const nge = new Map();
  const stack = [];
  for (const n of nums2) {
    while (stack.length && n > stack[stack.length - 1]) nge.set(stack.pop(), n);
    stack.push(n);
  }
  for (const n of stack) nge.set(n, -1);
  return nums1.map((n) => nge.get(n));
}
