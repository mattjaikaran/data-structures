function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { quickSort } from '../../fundamentals/quick_sort/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const tests = [
    [64, 34, 25, 12, 22, 11, 90],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [],
    [1, 1, 1],
  ];
const exp = tests.map((t) => [...t].sort((a, b) => a - b));
const fns = [[quickSort, "quick_sort"]];
for (const [fn, name] of fns) {
    for (let i = 0; i < tests.length; i++)
      assert(eq(fn(tests[i]), exp[i]), `${name} case ${i}`);
    console.log(`  ✅ ${name}Sort`);
  }
console.log('PASS 06_sorting/quick_sort (js)');
