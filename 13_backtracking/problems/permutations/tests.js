function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { permutations } from '../../problems/permutations/solution.js';



assert(permutations([1,2,3]).length === 6, "permutations");
console.log('PASS 13_backtracking/permutations (js)');
