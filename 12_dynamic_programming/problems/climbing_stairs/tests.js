function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { climbingStairs } from '../../problems/climbing_stairs/solution.js';



assert(climbingStairs(5)===8&&climbingStairs(2)===2,"climbing");
console.log('PASS 12_dynamic_programming/climbing_stairs (js)');
