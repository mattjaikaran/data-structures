function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { LRUCache } from '../../problems/lru_cache/solution.js';



const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
assert(lru.get(1) === 1, "lru get hit");
lru.put(3, 3);
assert(lru.get(2) === -1, "lru evict 2");
lru.put(4, 4);
assert(lru.get(1) === -1, "lru evict 1");
assert(lru.get(3) === 3, "lru get 3");
assert(lru.get(4) === 4, "lru get 4");
console.log('PASS 04_linked_lists/lru_cache (js)');
