function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { DynamicArray } from '../../fundamentals/dynamic_array/solution.js';



const da = new DynamicArray();
for (let i = 0; i < 10; i++) da.append(i);
assert(da.size === 10, "size after appends");
assert(da.get(0) === 0 && da.get(9) === 9, "get boundaries");
da.insert(3, 99);
assert(da.get(3) === 99 && da.size === 11, "insert");
da.removeAt(3);
assert(da.get(3) === 3 && da.size === 10, "removeAt");
console.log('PASS 01_arrays/dynamic_array (js)');
