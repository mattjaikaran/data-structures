function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { MedianFinder } from '../../problems/median_finder/solution.js';



const mf = new MedianFinder();
[1, 2, 3].forEach((n) => mf.addNum(n));
assert(mf.findMedian() === 2, "median odd");
mf.addNum(4);
assert(mf.findMedian() === 2.5, "median even");
console.log('PASS 08_heaps/median_finder (js)');
