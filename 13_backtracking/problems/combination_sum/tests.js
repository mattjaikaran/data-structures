function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { combinationSum } from '../../problems/combination_sum/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const cs = combinationSum([2,3,6,7], 7);
assert(cs.length === 2 && cs.some(c => eq(c,[7])), "combinationSum");
console.log('PASS 13_backtracking/combination_sum (js)');
