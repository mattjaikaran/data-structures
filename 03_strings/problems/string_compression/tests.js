function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { stringCompression } from '../../problems/string_compression/solution.js';



const chars = ["a", "a", "b", "b", "c", "c", "c"];
assert(stringCompression(chars) === 6, "compression");
console.log('PASS 03_strings/string_compression (js)');
