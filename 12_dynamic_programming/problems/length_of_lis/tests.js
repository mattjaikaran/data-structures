function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { lengthOfLIS } from '../../problems/length_of_lis/solution.js';



assert(lengthOfLIS([10,9,2,5,3,7,101,18])===4,"lis");
console.log('PASS 12_dynamic_programming/length_of_lis (js)');
