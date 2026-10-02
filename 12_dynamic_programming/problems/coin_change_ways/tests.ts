function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { coinChangeWays } from '../../problems/coin_change_ways/solution.ts';



assert(coinChangeWays([1,2,5],5)===4,"coinWays");
console.log('PASS 12_dynamic_programming/coin_change_ways (ts)');
