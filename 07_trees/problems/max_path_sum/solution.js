/** 🔴 Binary Tree Maximum Path Sum (LC #124)
 * @param {TreeNode|null} r
 * @returns {number}
 */
export function maxPathSum(r) {
  let best = -Infinity;
  const g = (n) => {
    if (!n) return 0;
    const l = Math.max(g(n.left), 0),
      ri = Math.max(g(n.right), 0);
    best = Math.max(best, l + ri + n.val);
    return n.val + Math.max(l, ri);
  };
  g(r);
  return best;
}
