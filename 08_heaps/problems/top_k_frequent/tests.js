function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { topKFrequent } from '../../problems/top_k_frequent/solution.js';



const tf1 = topKFrequent([1, 1, 1, 2, 2, 3], 2);
assert(new Set(tf1).has(1) && new Set(tf1).has(2), "topKFrequent");
console.log('PASS 08_heaps/top_k_frequent (js)');
