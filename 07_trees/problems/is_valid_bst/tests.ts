function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isValidBST } from '../../problems/is_valid_bst/solution.ts';
import { fromArray } from '../../fundamentals/bst/solution.ts';



assert(isValidBST(fromArray([2,1,3])),"validBST");
assert(!isValidBST(fromArray([5,1,4,null,null,3,6])),"invalidBST");
console.log('PASS 07_trees/is_valid_bst (ts)');
