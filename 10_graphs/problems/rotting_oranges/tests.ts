function assert(condition: unknown, message = 'Assertion failed'): void {
  if (!condition) throw new Error(message);
}
import { rottingOranges } from './solution.ts';
const grid = [[2,1,1],[1,1,0],[0,1,1]];
assert(rottingOranges(grid) === 4);
assert(JSON.stringify(grid) === JSON.stringify([[2,2,2],[2,2,0],[0,2,2]]));
assert(rottingOranges([[2,1,1,1,2]]) === 2, 'Simultaneous sources');
assert(rottingOranges([[2,0,1]]) === -1);
assert(rottingOranges([[1]]) === -1);
assert(rottingOranges([[0,2]]) === 0);
assert(rottingOranges([]) === 0);
console.log('PASS 10_graphs/rotting_oranges (ts)');
