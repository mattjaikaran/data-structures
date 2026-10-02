function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { bestTimeBuySell } from '../../problems/best_time_buy_sell/solution.ts';



assert(bestTimeBuySell([7, 1, 5, 3, 6, 4]) === 5, "buy sell profit");
assert(bestTimeBuySell([7, 6, 4, 3, 1]) === 0, "buy sell no profit");
console.log('PASS 01_arrays/best_time_buy_sell (ts)');
