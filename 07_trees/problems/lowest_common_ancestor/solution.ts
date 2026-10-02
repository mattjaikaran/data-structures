import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function lowestCommonAncestor(r: TreeNode|null, p: TreeNode, q: TreeNode): TreeNode|null {
  if (!r||r===p||r===q) return r;
  const l=lowestCommonAncestor(r.left,p,q), ri=lowestCommonAncestor(r.right,p,q);
  return l&&ri ? r : l??ri;
}
