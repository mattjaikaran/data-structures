/** 🟡 Binary Tree Zigzag Level Order (LC #103)
 * @param {TreeNode|null} r
 * @returns {number[][]}
 */
export function zigzagLevelOrder(r) {
  const res = [];
  if (!r) return res;
  const q = [r];
  let leftToRight = true;
  while (q.length) {
    const len = q.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      const n = q.shift();
      leftToRight ? level.push(n.val) : level.unshift(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    res.push(level);
    leftToRight = !leftToRight;
  }
  return res;
}
