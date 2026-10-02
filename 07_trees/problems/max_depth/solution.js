/** 🟢 Maximum Depth of Binary Tree (LC #104)
 * @param {TreeNode|null} r
 * @returns {number}
 */
export function maxDepth(r) {
  return r ? 1 + Math.max(maxDepth(r.left), maxDepth(r.right)) : 0;
}
