function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { zigzagConversion } from '../../problems/zigzag_conversion/solution.js';



assert(zigzagConversion("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR", "zigzag 3");
assert(zigzagConversion("PAYPALISHIRING", 4) === "PINALSIGYAHRPI", "zigzag 4");
console.log('PASS 03_strings/zigzag_conversion (js)');
