function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isIsomorphic } from '../../problems/is_isomorphic/solution.ts';



assert(isIsomorphic("egg","add")&&!isIsomorphic("foo","bar"),"isomorph");
console.log('PASS 02_hash_maps/is_isomorphic (ts)');
