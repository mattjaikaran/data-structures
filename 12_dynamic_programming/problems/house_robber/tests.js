function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { houseRobber } from '../../problems/house_robber/solution.js';



assert(houseRobber([2,7,9,3,1])===12&&houseRobber([1,2,3,1])===4,"robber");
console.log('PASS 12_dynamic_programming/house_robber (js)');
