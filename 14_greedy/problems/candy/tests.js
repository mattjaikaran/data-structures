function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { candy } from '../../problems/candy/solution.js';



assert(candy([1,0,2]) === 5 && candy([1,2,2]) === 4, "candy");
console.log('PASS 14_greedy/candy (js)');
