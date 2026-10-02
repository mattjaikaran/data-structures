import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.lru_cache.solution import LRUCache

lru = LRUCache(2)
lru.put(1, 1)
lru.put(2, 2)
assert lru.get(1) == 1
lru.put(3, 3)
assert lru.get(2) == -1
lru.put(4, 4)
assert lru.get(1) == -1
assert lru.get(3) == 3
assert lru.get(4) == 4
print("PASS 04_linked_lists/lru_cache (py)")
