function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { decodeWays } from '../../problems/decode_ways/solution.js';



assert(decodeWays("12")===2&&decodeWays("226")===3&&decodeWays("06")===0,"decode");
console.log('PASS 12_dynamic_programming/decode_ways (js)');
