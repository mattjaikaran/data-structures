import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function levelOrder(root: TreeNode|null): number[][] {
  if (!root) return [];
  const res: number[][] = [], q = [root];
  while (q.length) {
    const level: number[] = [], len = q.length;
    for (let i = 0; i < len; i++) { const n = q.shift()!; level.push(n.val); if (n.left) q.push(n.left); if (n.right) q.push(n.right); }
    res.push(level);
  }
  return res;
}
