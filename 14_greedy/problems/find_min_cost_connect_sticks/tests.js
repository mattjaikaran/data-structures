function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { findMinCostConnectSticks } from '../../problems/find_min_cost_connect_sticks/solution.js';



assert(findMinCostConnectSticks([2,4,3]) === 14, "connectSticks");
console.log('PASS 14_greedy/find_min_cost_connect_sticks (js)');
