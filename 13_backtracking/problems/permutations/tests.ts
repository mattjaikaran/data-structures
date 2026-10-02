function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { permutations } from '../../problems/permutations/solution.ts';



assert(permutations([1,2,3]).length === 6, "permutations");
console.log('PASS 13_backtracking/permutations (ts)');
