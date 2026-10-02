function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { MaxHeap } from '../../fundamentals/max_heap/solution.js';



const mxh = new MaxHeap();
[5, 2, 8, 1, 9].forEach((v) => mxh.push(v));
assert(mxh.peek() === 9, "maxheap peek");
assert(mxh.pop() === 9, "maxheap pop");
const drained = new MaxHeap();
[2, 9, 9, -3].forEach(value => drained.push(value));
assert(JSON.stringify(Array.from({ length: 4 }, () => drained.pop())) === JSON.stringify([9, 9, 2, -3]));
assert(drained.pop() === undefined && drained.peek() === undefined && drained.size === 0);
drained.push(4);
assert(drained.peek() === 4 && drained.pop() === 4);
console.log('PASS 08_heaps/max_heap (js)');
