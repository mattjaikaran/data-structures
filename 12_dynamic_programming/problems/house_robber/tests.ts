function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { houseRobber } from '../../problems/house_robber/solution.ts';



assert(houseRobber([2,7,9,3,1])===12&&houseRobber([1,2,3,1])===4,"robber");
console.log('PASS 12_dynamic_programming/house_robber (ts)');
