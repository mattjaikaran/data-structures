function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { searchRotated } from '../../problems/search_rotated/solution.ts';



assert(searchRotated([4, 5, 6, 7, 0, 1, 2], 0) === 4, "search rotated found");
assert(searchRotated([4, 5, 6, 7, 0, 1, 2], 3) === -1, "search rotated not found");
assert(searchRotated([1], 0) === -1, "search rotated single");
console.log('PASS 01_arrays/search_rotated (ts)');
