function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isSymmetric } from '../../problems/is_symmetric/solution.ts';
import { fromArray } from '../../fundamentals/bst/solution.ts';



assert(isSymmetric(fromArray([1,2,2,3,4,4,3])),"symmetric");
assert(!isSymmetric(fromArray([1,2,2,null,3,null,3])),"asymmetric");
console.log('PASS 07_trees/is_symmetric (ts)');
