function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { assignCookies } from '../../problems/assign_cookies/solution.js';



assert(assignCookies([1,2,3],[1,1]) === 1, "assignCookies");
console.log('PASS 14_greedy/assign_cookies (js)');
