function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { numIslands } from '../../problems/num_islands/solution.ts';



assert(numIslands([["1","1","0"],["0","1","0"],["0","0","1"]])===2,"islands");
console.log('PASS 10_graphs/num_islands (ts)');
