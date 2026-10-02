function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { TreeNode } from '../../fundamentals/bst/solution.ts';
import { lowestCommonAncestor } from '../../problems/lowest_common_ancestor/solution.ts';



const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
assert(lowestCommonAncestor(root, root.left, root.right) === root);
assert(lowestCommonAncestor(root, root, root.left) === root);
console.log('PASS 07_trees/lowest_common_ancestor (ts)');
