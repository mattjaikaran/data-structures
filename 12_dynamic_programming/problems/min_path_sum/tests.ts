function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { minPathSum } from '../../problems/min_path_sum/solution.ts';



assert(minPathSum([[1,3,1],[1,5,1],[4,2,1]])===7,"minPath");
console.log('PASS 12_dynamic_programming/min_path_sum (ts)');
