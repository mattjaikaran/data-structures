function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { nQueens } from '../../problems/n_queens/solution.js';



assert(nQueens(4).length === 2, "nQueens 4x4");
console.log('PASS 13_backtracking/n_queens (js)');
