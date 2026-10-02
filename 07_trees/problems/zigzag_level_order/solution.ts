import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function zigzagLevelOrder(r: TreeNode|null): number[][] {
  const res: number[][] = []; if (!r) return res;
  const q=[r]; let leftToRight=true;
  while(q.length){const len=q.length;const level:number[]=[];for(let i=0;i<len;i++){const n=q.shift()!;leftToRight?level.push(n.val):level.unshift(n.val);if(n.left)q.push(n.left);if(n.right)q.push(n.right);}res.push(level);leftToRight=!leftToRight;}
  return res;
}
