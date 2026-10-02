function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { climbingStairs } from '../../problems/climbing_stairs/solution.ts';



assert(climbingStairs(5)===8&&climbingStairs(2)===2,"climbing");
console.log('PASS 12_dynamic_programming/climbing_stairs (ts)');
