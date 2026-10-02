function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { binarySearch } from '../../fundamentals/binary_search/solution.ts';



const sorted = [1, 3, 5, 7, 9, 11, 13];
assert(binarySearch(sorted, 7) === 3, "bs found");
assert(binarySearch(sorted, 1) === 0, "bs left boundary");
assert(binarySearch(sorted, 13) === 6, "bs right boundary");
assert(binarySearch(sorted, 6) === -1, "bs not found");
let randomState = 123456789;
const nextRandom = () => { randomState = (Math.imul(randomState, 1664525) + 1013904223) >>> 0; return randomState; };
for (let trial = 0; trial < 60; trial++) {
  const values = Array.from({length: nextRandom() % 31}, () => nextRandom() % 41 - 20).sort((a,b) => a-b);
  const before = values.slice();
  const target = nextRandom() % 51 - 25;
  const position = binarySearch(values,target);
  assert(values.includes(target) ? position >= 0 && position < values.length && values[position] === target : position === -1);
  assert(JSON.stringify(values) === JSON.stringify(before), 'Search must not mutate input');
}
assert(binarySearch([], 1) === -1);
assert(binarySearch([5], 5) === 0);
assert(binarySearch([5], 4) === -1);

console.log('PASS 01_arrays/binary_search (ts)');
