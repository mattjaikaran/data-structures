import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from collections import Counter
from problems.rearrange_string_k_apart.solution import rearrange_string_k_apart

from collections import Counter
result = rearrange_string_k_apart("aabbcc", 3)
assert Counter(result) == Counter("aabbcc")
assert all(result[i] != result[j] for i in range(len(result)) for j in range(i + 1, min(i + 3, len(result))))
assert rearrange_string_k_apart("aaabc", 3) == ""
print("PASS 14_greedy/rearrange_string_k_apart (py)")
