function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { jumpGame } from '../../problems/jump_game/solution.ts';



assert(jumpGame([2,3,1,1,4])&&!jumpGame([3,2,1,0,4]),"jumpGame");
console.log('PASS 12_dynamic_programming/jump_game (ts)');
