function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { uniquePaths } from '../../problems/unique_paths/solution.ts';



assert(uniquePaths(3,7)===28&&uniquePaths(3,2)===3,"uniquePaths");
console.log('PASS 12_dynamic_programming/unique_paths (ts)');
