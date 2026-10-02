/** 🟡 Binary Tree Right Side View (LC #199)
 * @param {TreeNode|null} r
 * @returns {number[]}
 */
export function rightSideView(r) {
  const res = [];
  if (!r) return res;
  const q = [r];
  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const n = q.shift();
      if (i === len - 1) res.push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
  }
  return res;
}
