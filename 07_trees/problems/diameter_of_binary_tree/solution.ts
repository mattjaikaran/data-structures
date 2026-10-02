import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function diameterOfBinaryTree(r: TreeNode|null): number {
  let best = 0;
  const h = (n: TreeNode|null): number => { if (!n) return 0; const l=h(n.left),ri=h(n.right); best=Math.max(best,l+ri); return 1+Math.max(l,ri); };
  h(r); return best;
}
