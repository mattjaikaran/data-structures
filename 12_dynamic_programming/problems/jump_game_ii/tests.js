function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { jumpGameII } from '../../problems/jump_game_ii/solution.js';



assert(jumpGameII([2,3,1,1,4])===2,"jumpII");
console.log('PASS 12_dynamic_programming/jump_game_ii (js)');
