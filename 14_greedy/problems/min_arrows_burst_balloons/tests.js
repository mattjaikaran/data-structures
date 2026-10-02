function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { minArrowsBurstBalloons } from '../../problems/min_arrows_burst_balloons/solution.js';



assert(minArrowsBurstBalloons([[10,16],[2,8],[1,6],[7,12]]) === 2, "arrows");
console.log('PASS 14_greedy/min_arrows_burst_balloons (js)');
