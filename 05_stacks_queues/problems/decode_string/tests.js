function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { decodeString } from '../../problems/decode_string/solution.js';



assert(decodeString("3[a2[c]]") === "accaccacc", "decode nested");
assert(decodeString("3[a]2[bc]") === "aaabcbc", "decode basic");
console.log('PASS 05_stacks_queues/decode_string (js)');
