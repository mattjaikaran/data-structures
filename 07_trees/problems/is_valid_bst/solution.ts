import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function isValidBST(r: TreeNode|null): boolean {
  const v = (n: TreeNode|null, lo: number, hi: number): boolean =>
    !n ? true : n.val>lo&&n.val<hi && v(n.left,lo,n.val) && v(n.right,n.val,hi);
  return v(r,-Infinity,Infinity);
}
