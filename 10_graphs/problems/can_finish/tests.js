function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { canFinish } from '../../problems/can_finish/solution.js';



assert(canFinish(2, [[1, 0]]) && !canFinish(2, [[1, 0], [0, 1]]), "canFinish");
assert(canFinish(4, [[1,0],[2,1],[3,2]]));
assert(canFinish(3, [[1,0],[1,0]]));
assert(!canFinish(1, [[0,0]]));
assert(!canFinish(5, [[1,0],[3,2],[2,3]]), 'Disconnected components can contain a cycle');
assert(canFinish(3, []));

console.log('PASS 10_graphs/can_finish (js)');
