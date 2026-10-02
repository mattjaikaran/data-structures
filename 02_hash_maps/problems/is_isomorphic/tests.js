function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isIsomorphic } from '../../problems/is_isomorphic/solution.js';



assert(isIsomorphic("egg", "add") && !isIsomorphic("foo", "bar"), "isomorph");
console.log('PASS 02_hash_maps/is_isomorphic (js)');
