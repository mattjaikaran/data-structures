function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { numTrees } from '../../problems/num_trees/solution.ts';



assert(numTrees(3)===5&&numTrees(1)===1,"numTrees");
console.log('PASS 12_dynamic_programming/num_trees (ts)');
