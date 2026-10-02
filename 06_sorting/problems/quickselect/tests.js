function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { quickselect } from '../../problems/quickselect/solution.js';



assert(quickselect([3, 2, 1, 5, 6, 4], 2) === 2, "quickselect");
console.log('PASS 06_sorting/quickselect (js)');
