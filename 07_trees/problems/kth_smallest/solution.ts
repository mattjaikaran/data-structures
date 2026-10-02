import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function kthSmallest(r: TreeNode|null, k: number): number {
  const stack: TreeNode[] = []; let cur = r, cnt = 0;
  while (stack.length||cur) {
    while (cur) { stack.push(cur); cur=cur.left; }
    cur=stack.pop()!; if(++cnt===k) return cur.val; cur=cur.right;
  }
  return -1;
}
