function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { assignCookies } from '../../problems/assign_cookies/solution.ts';



assert(assignCookies([1,2,3],[1,1]) === 1, "assignCookies");
console.log('PASS 14_greedy/assign_cookies (ts)');
