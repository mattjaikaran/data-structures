function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { MaxHeap } from '../../fundamentals/max_heap/solution.js';



const mxh = new MaxHeap();
[5, 2, 8, 1, 9].forEach((v) => mxh.push(v));
assert(mxh.peek() === 9, "maxheap peek");
assert(mxh.pop() === 9, "maxheap pop");
console.log('PASS 08_heaps/max_heap (js)');
