function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { bestTimeCooldown } from '../../problems/best_time_cooldown/solution.js';



assert(bestTimeCooldown([1,2,3,0,2])===3,"cooldown");
console.log('PASS 12_dynamic_programming/best_time_cooldown (js)');
