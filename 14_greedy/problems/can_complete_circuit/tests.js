function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { canCompleteCircuit } from '../../problems/can_complete_circuit/solution.js';



assert(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]) === 3, "gasStation");
assert(canCompleteCircuit([2,3,4],[3,4,3]) === -1, "gasStation impossible");
console.log('PASS 14_greedy/can_complete_circuit (js)');
