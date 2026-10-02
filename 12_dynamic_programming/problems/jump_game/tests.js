function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { jumpGame } from '../../problems/jump_game/solution.js';



assert(jumpGame([2,3,1,1,4])&&!jumpGame([3,2,1,0,4]),"jumpGame");
console.log('PASS 12_dynamic_programming/jump_game (js)');
