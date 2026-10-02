function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { radixSort } from '../../fundamentals/radix_sort/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(
    eq(radixSort([170, 45, 75, 90, 802, 24, 2, 66]), [2, 24, 45, 66, 75, 90, 170, 802]),
    "radix"
  );
console.log('PASS 06_sorting/radix_sort (js)');
