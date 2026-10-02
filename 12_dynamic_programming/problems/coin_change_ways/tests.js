function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { coinChangeWays } from '../../problems/coin_change_ways/solution.js';



assert(coinChangeWays([1,2,5],5)===4,"coinWays");
console.log('PASS 12_dynamic_programming/coin_change_ways (js)');
