/** 🟡 Lowest Common Ancestor (LC #236)
 * @param {TreeNode|null} r
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {TreeNode|null}
 */
export function lowestCommonAncestor(r, p, q) {
  if (!r || r === p || r === q) return r;
  const l = lowestCommonAncestor(r.left, p, q),
    ri = lowestCommonAncestor(r.right, p, q);
  return l && ri ? r : l ?? ri;
}
