function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { bestTimeCooldown } from '../../problems/best_time_cooldown/solution.ts';



assert(bestTimeCooldown([1,2,3,0,2])===3,"cooldown");
console.log('PASS 12_dynamic_programming/best_time_cooldown (ts)');
