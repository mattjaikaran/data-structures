function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { burstBalloons } from '../../problems/burst_balloons/solution.ts';



assert(burstBalloons([3,1,5,8])===167,"burst");
console.log('PASS 12_dynamic_programming/burst_balloons (ts)');
