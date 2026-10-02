function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { dutchNationalFlag } from '../../problems/dutch_national_flag/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(
    eq(dutchNationalFlag([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]),
    "dutch"
  );
console.log('PASS 06_sorting/dutch_national_flag (js)');
