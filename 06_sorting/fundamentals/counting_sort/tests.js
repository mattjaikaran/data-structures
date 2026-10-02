function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { countingSort } from '../../fundamentals/counting_sort/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(
    eq(countingSort([4, 2, 2, 8, 3, 3, 1]), [1, 2, 2, 3, 3, 4, 8]),
    "counting"
  );
console.log('PASS 06_sorting/counting_sort (js)');
