import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function invertTree(r: TreeNode|null): TreeNode|null {
  if (!r) return null; [r.left,r.right]=[invertTree(r.right),invertTree(r.left)]; return r;
}
