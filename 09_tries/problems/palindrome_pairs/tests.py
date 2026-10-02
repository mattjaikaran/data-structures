import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.palindrome_pairs.solution import palindrome_pairs

pairs = palindrome_pairs(["abcd","dcba","lls","s","sssll"])
assert [0,1] in pairs and [1,0] in pairs
print("PASS 09_tries/palindrome_pairs (py)")
