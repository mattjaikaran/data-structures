import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.rabin_karp.solution import rabin_karp

assert rabin_karp("ababa", "aba") == [0, 2]
assert rabin_karp("aaaa", "aa") == [0, 1, 2]
assert rabin_karp("abc", "z") == []
from random import Random
random = Random(27)
for _ in range(80):
    text = ''.join(random.choice('abc') for _ in range(random.randrange(35)))
    pattern = ''.join(random.choice('abc') for _ in range(random.randrange(9)))
    expected = [i for i in range(len(text)+1) if text.startswith(pattern,i)]
    assert rabin_karp(text,pattern) == expected
assert rabin_karp('AzB[','Az') == [0], 'Equal rolling hashes must still compare characters'
assert rabin_karp('', '') == [0]
assert rabin_karp('a', 'aa') == []

print("PASS 03_strings/rabin_karp (py)")
