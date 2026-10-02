/** @param {TreeNode|null} root
 * @returns {number[][]}
 */
export function levelOrder(root) {
  if (!root) return [];
  const res = [],
    q = [root];
  while (q.length) {
    const level = [],
      len = q.length;
    for (let i = 0; i < len; i++) {
      const n = q.shift();
      level.push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    res.push(level);
  }
  return res;
}
