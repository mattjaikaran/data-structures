import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.hash_map.solution import HashMap

hm = HashMap()
hm.put('a',1)
hm.put('b',2)
hm.put('a',99)
assert hm.get('a')==99 and hm.get('b')==2 and hm.get('z')==-1
hm.remove('a')
assert hm.get('a')==-1
print("PASS 02_hash_maps/hash_map (py)")
