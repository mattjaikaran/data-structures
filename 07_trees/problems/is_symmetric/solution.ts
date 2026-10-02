import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function isSymmetric(r: TreeNode|null): boolean {
  const m = (l: TreeNode|null, ri: TreeNode|null): boolean =>
    !l&&!ri ? true : !l||!ri ? false : l.val===ri.val && m(l.left,ri.right) && m(l.right,ri.left);
  return r ? m(r.left, r.right) : true;
}
