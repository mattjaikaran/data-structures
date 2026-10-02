function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { reorganizeString } from '../../problems/reorganize_string/solution.ts';



const rs = reorganizeString("aab");
assert(rs.length===3&&rs[0]!==rs[1]&&rs[1]!==rs[2],"reorganize valid");
assert(reorganizeString("aaab")==="","reorganize impossible");
console.log('PASS 08_heaps/reorganize_string (ts)');
