import { TreeNode } from '../../fundamentals/bst/solution.ts';

export function maxDepth(r: TreeNode|null): number { return r ? 1+Math.max(maxDepth(r.left),maxDepth(r.right)) : 0; }
