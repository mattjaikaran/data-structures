function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { maxPathSum } from '../../problems/max_path_sum/solution.ts';
import { fromArray } from '../../fundamentals/bst/solution.ts';



assert(maxPathSum(fromArray([-10,9,20,null,null,15,7]))===42,"maxPathSum");
console.log('PASS 07_trees/max_path_sum (ts)');
