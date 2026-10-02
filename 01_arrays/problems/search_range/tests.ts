function assert(condition: unknown, message = 'Assertion failed'): void {
  if (!condition) throw new Error(message);
}
import { searchRange } from './solution.ts';
for (const [nums, target, expected] of [
  [[1,2,2,2,4],2,[1,3]], [[2,2],2,[0,1]], [[2],2,[0,0]],
  [[1,3],2,[-1,-1]], [[],2,[-1,-1]], [[1,3],4,[-1,-1]]
] as [number[], number, number[]][]) {
  const input = nums.slice();
  assert(JSON.stringify(searchRange(nums, target)) === JSON.stringify(expected));
  assert(JSON.stringify(nums) === JSON.stringify(input), 'Input mutation');
}
console.log('PASS 01_arrays/search_range (ts)');
