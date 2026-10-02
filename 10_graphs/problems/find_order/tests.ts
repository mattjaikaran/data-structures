function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { findOrder } from '../../problems/find_order/solution.ts';



const order = findOrder(4,[[1,0],[2,0],[3,1],[3,2]]);
assert(order.length===4,"findOrder");
console.log('PASS 10_graphs/find_order (ts)');
