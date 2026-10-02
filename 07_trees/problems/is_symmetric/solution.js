/** 🟢 Symmetric Tree (LC #101)
 * @param {TreeNode|null} r
 * @returns {boolean}
 */
export function isSymmetric(r) {
  const m = (l, ri) =>
    !l && !ri ? true : !l || !ri ? false : l.val === ri.val && m(l.left, ri.right) && m(l.right, ri.left);
  return r ? m(r.left, r.right) : true;
}
