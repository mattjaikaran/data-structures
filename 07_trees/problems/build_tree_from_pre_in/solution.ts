import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function buildTreeFromPreIn(pre: number[], ino: number[]): TreeNode|null {
  if (!pre.length) return null;
  const root = new TreeNode(pre[0]), mid = ino.indexOf(pre[0]);
  root.left = buildTreeFromPreIn(pre.slice(1,mid+1), ino.slice(0,mid));
  root.right = buildTreeFromPreIn(pre.slice(mid+1), ino.slice(mid+1));
  return root;
}
