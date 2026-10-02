function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { containsDuplicate } from '../../problems/contains_duplicate/solution.ts';



assert(containsDuplicate([1, 2, 1]));
assert(!containsDuplicate([1, 2, 3]));
assert(!containsDuplicate([]));
console.log('PASS 01_arrays/contains_duplicate (ts)');
