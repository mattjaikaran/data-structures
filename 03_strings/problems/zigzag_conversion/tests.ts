function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { zigzagConversion } from '../../problems/zigzag_conversion/solution.ts';



assert(zigzagConversion("PAYPALISHIRING",3)==="PAHNAPLSIIGYIR","zigzag 3");
assert(zigzagConversion("PAYPALISHIRING",4)==="PINALSIGYAHRPI","zigzag 4");
console.log('PASS 03_strings/zigzag_conversion (ts)');
