function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { HashMap } from '../../fundamentals/hash_map/solution.js';



const hm = new HashMap();
hm.put("a", 1);
hm.put("b", 2);
hm.put("a", 99);
assert(hm.get("a") === 99 && hm.get("b") === 2, "put/get/update");
assert(hm.get("z") === undefined, "get missing");
hm.remove("a");
assert(!hm.has("a"), "remove");
console.log('PASS 02_hash_maps/hash_map (js)');
