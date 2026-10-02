function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { editDistance } from '../../problems/edit_distance/solution.js';



assert(editDistance("horse","ros")===3&&editDistance("intention","execution")===5,"editDist");
console.log('PASS 12_dynamic_programming/edit_distance (js)');
