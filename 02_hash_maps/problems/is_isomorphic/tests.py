import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.is_isomorphic.solution import is_isomorphic

assert is_isomorphic("egg","add") and not is_isomorphic("foo","bar")
print("PASS 02_hash_maps/is_isomorphic (py)")
