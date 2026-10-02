/** 🟢 Invert Binary Tree (LC #226)
 * @param {TreeNode|null} r
 * @returns {TreeNode|null}
 */
export function invertTree(r) {
  if (!r) return null;
  [r.left, r.right] = [invertTree(r.right), invertTree(r.left)];
  return r;
}
