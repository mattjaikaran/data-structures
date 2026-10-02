function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { networkDelay } from '../../problems/network_delay/solution.ts';



assert(networkDelay([[2,1,1],[2,3,1],[3,4,1]],4,2)===2,"networkDelay");
console.log('PASS 10_graphs/network_delay (ts)');
