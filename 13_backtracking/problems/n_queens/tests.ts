function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { nQueens } from '../../problems/n_queens/solution.ts';



assert(nQueens(4).length === 2, "nQueens 4x4");
console.log('PASS 13_backtracking/n_queens (ts)');
