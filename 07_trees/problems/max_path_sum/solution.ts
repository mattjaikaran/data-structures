import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function maxPathSum(r: TreeNode|null): number {
  let best = -Infinity;
  const g = (n: TreeNode|null): number => {
    if (!n) return 0;
    const l=Math.max(g(n.left),0), ri=Math.max(g(n.right),0);
    best=Math.max(best,l+ri+n.val); return n.val+Math.max(l,ri);
  };
  g(r); return best;
}
