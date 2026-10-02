function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { canFinish } from '../../problems/can_finish/solution.js';



assert(canFinish(2, [[1, 0]]) && !canFinish(2, [[1, 0], [0, 1]]), "canFinish");
console.log('PASS 10_graphs/can_finish (js)');
