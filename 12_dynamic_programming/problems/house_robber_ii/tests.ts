function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { houseRobberII } from '../../problems/house_robber_ii/solution.ts';



assert(houseRobberII([2,3,2])===3&&houseRobberII([1,2,3,1])===4,"robber2");
console.log('PASS 12_dynamic_programming/house_robber_ii (ts)');
