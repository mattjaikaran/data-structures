function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { stringCompression } from '../../problems/string_compression/solution.ts';



const chars = ['a','a','b','b','c','c','c'];
assert(stringCompression(chars)===6,"compression");
console.log('PASS 03_strings/string_compression (ts)');
