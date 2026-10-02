/** 🟡 Balanced Binary Tree (LC #110)
 * @param {TreeNode|null} r
 * @returns {boolean}
 */
export function isBalanced(r) {
  const h = (n) => {
    if (!n) return 0;
    const l = h(n.left),
      ri = h(n.right);
    if (l < 0 || ri < 0 || Math.abs(l - ri) > 1) return -1;
    return 1 + Math.max(l, ri);
  };
  return h(r) >= 0;
}
