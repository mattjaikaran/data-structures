/** 🟢 Diameter of Binary Tree (LC #543)
 * @param {TreeNode|null} r
 * @returns {number}
 */
export function diameterOfBinaryTree(r) {
  let best = 0;
  const h = (n) => {
    if (!n) return 0;
    const l = h(n.left),
      ri = h(n.right);
    best = Math.max(best, l + ri);
    return 1 + Math.max(l, ri);
  };
  h(r);
  return best;
}
