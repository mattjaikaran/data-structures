function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { twoCityScheduling } from '../../problems/two_city_scheduling/solution.js';



assert(twoCityScheduling([[10,20],[30,200],[400,50],[30,20]]) === 110, "twoCityScheduling");
console.log('PASS 14_greedy/two_city_scheduling (js)');
