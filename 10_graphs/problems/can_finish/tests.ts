function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { canFinish } from '../../problems/can_finish/solution.ts';



assert(canFinish(2,[[1,0]])&&!canFinish(2,[[1,0],[0,1]]),"canFinish");
console.log('PASS 10_graphs/can_finish (ts)');
