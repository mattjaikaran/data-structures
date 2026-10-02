function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { findMiddle } from '../../problems/find_middle/solution.ts';
import { fromArray } from '../../fundamentals/singly_linked_list/solution.ts';



assert(findMiddle(fromArray([1, 2, 3, 4, 5]))!.val === 3, "middle odd");
assert(findMiddle(fromArray([1, 2, 3, 4]))!.val === 3, "middle even");
assert(findMiddle(fromArray([1]))!.val === 1, "middle single");
console.log('PASS 04_linked_lists/find_middle (ts)');
