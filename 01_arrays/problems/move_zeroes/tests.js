function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { moveZeroes } from '../../problems/move_zeroes/solution.js';

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

const mz = [0, 1, 0, 3, 12];
moveZeroes(mz);
assert(deepEqual(mz, [1, 3, 12, 0, 0]), "move zeroes");
console.log('PASS 01_arrays/move_zeroes (js)');
