function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { coinChange } from '../../problems/coin_change/solution.js';



assert(coinChange([1,5,11],15)===3&&coinChange([2],3)===-1,"coinChange");
console.log('PASS 12_dynamic_programming/coin_change (js)');
