function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { diameterOfBinaryTree } from '../../problems/diameter_of_binary_tree/solution.ts';
import { fromArray } from '../../fundamentals/bst/solution.ts';



assert(diameterOfBinaryTree(fromArray([1,2,3,4,5]))===3,"diameter");
console.log('PASS 07_trees/diameter_of_binary_tree (ts)');
