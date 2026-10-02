function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { decodeWays } from '../../problems/decode_ways/solution.ts';



assert(decodeWays("12")===2&&decodeWays("226")===3&&decodeWays("06")===0,"decode");
console.log('PASS 12_dynamic_programming/decode_ways (ts)');
