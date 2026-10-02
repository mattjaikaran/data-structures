function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { numIslands } from '../../problems/num_islands/solution.js';



assert(numIslands([["1", "1", "0"], ["0", "1", "0"], ["0", "0", "1"]]) === 2, "islands");
console.log('PASS 10_graphs/num_islands (js)');
