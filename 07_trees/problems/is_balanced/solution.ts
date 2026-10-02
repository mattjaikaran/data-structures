import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function isBalanced(r: TreeNode|null): boolean {
  const h = (n: TreeNode|null): number => {
    if (!n) return 0;
    const l=h(n.left), ri=h(n.right);
    if (l<0||ri<0||Math.abs(l-ri)>1) return -1;
    return 1+Math.max(l,ri);
  };
  return h(r) >= 0;
}
