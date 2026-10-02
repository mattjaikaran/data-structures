import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from fundamentals.trie.solution import Trie
from fundamentals.wildcard_trie.solution import WildcardTrie

t = Trie()
for w in ["apple","app","application","apply"]: t.insert(w)
assert t.search("apple") and t.search("app")
assert not t.search("ap") and not t.search("apples")
assert t.starts_with("app") and t.starts_with("appl")
assert not t.starts_with("xyz")
assert t.autocomplete("app") == ["app","apple","application","apply"]
assert t.autocomplete("xyz") == []
t.delete("app")
assert not t.search("app") and t.search("apple")
wt = WildcardTrie()
for w in ["bad","dad","mad"]: wt.insert(w)
assert wt.search("bad") and wt.search(".ad") and wt.search("b..")
assert not wt.search("pad") and not wt.search("ba")
print("PASS 09_tries/wildcard_trie (py)")
