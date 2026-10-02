function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { rotateRight } from '../../fundamentals/rotate_right/solution.ts';

function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

const rot = [1, 2, 3, 4, 5];
rotateRight(rot, 2);
assert(deepEqual(rot, [4, 5, 1, 2, 3]), "rotate right");
const rot2 = [1, 2, 3];
rotateRight(rot2, 4);
assert(deepEqual(rot2, [3, 1, 2]), "rotate right k > n");
console.log('PASS 01_arrays/rotate_right (ts)');
