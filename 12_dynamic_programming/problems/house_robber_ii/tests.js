function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { houseRobberII } from '../../problems/house_robber_ii/solution.js';



assert(houseRobberII([2,3,2])===3&&houseRobberII([1,2,3,1])===4,"robber2");
console.log('PASS 12_dynamic_programming/house_robber_ii (js)');
