function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { uniquePaths } from '../../problems/unique_paths/solution.js';



assert(uniquePaths(3,7)===28&&uniquePaths(3,2)===3,"uniquePaths");
console.log('PASS 12_dynamic_programming/unique_paths (js)');
