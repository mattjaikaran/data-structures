import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function rightSideView(r: TreeNode|null): number[] {
  const res: number[] = []; if (!r) return res;
  const q=[r];
  while (q.length) { const len=q.length; for (let i=0;i<len;i++){const n=q.shift()!;if(i===len-1)res.push(n.val);if(n.left)q.push(n.left);if(n.right)q.push(n.right);}}
  return res;
}
