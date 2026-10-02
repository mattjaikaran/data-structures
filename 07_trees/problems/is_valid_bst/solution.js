/** 🟢 Validate Binary Search Tree (LC #98)
 * @param {TreeNode|null} r
 * @returns {boolean}
 */
export function isValidBST(r) {
  const v = (n, lo, hi) =>
    !n ? true : n.val > lo && n.val < hi && v(n.left, lo, n.val) && v(n.right, n.val, hi);
  return v(r, -Infinity, Infinity);
}
