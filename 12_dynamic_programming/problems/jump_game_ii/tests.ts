function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { jumpGameII } from '../../problems/jump_game_ii/solution.ts';



assert(jumpGameII([2,3,1,1,4])===2,"jumpII");
console.log('PASS 12_dynamic_programming/jump_game_ii (ts)');
