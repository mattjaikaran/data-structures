function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { fromArray, inorder } from '../../fundamentals/bst/solution.ts';
import { invertTree } from '../../problems/invert_tree/solution.ts';



const inv = fromArray([4,2,7,1,3,6,9]);
invertTree(inv);
assert(inorder(inv)[0]===9,"invertTree");
console.log('PASS 07_trees/invert_tree (ts)');
