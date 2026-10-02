/** 🟡 Kth Smallest Element in BST (LC #230)
 * @param {TreeNode|null} r
 * @param {number} k
 * @returns {number}
 */
export function kthSmallest(r, k) {
  const stack = [];
  let cur = r,
    cnt = 0;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (++cnt === k) return cur.val;
    cur = cur.right;
  }
  return -1;
}
