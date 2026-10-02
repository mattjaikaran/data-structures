function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { MinHeap } from '../../fundamentals/min_heap/solution.js';



const mnh = new MinHeap();
[5, 2, 8, 1, 9].forEach((v) => mnh.push(v));
assert(mnh.peek() === 1, "minheap peek");
assert(mnh.pop() === 1, "minheap pop");
assert(mnh.peek() === 2, "minheap peek2");
const duplicateHeap = new MinHeap();
for (const value of [3,-1,3,0,-1]) duplicateHeap.push(value);
for (const value of [-1,-1,0,3,3]) assert(duplicateHeap.pop() === value);
assert(duplicateHeap.size === 0);
assert(duplicateHeap.pop() === undefined);
duplicateHeap.push(9);
assert(duplicateHeap.peek() === 9 && duplicateHeap.pop() === 9);

console.log('PASS 08_heaps/min_heap (js)');
