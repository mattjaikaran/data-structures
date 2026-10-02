import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.letter_combinations.solution import letter_combinations

lc = sorted(letter_combinations("23"))
assert lc == sorted(["ad","ae","af","bd","be","bf","cd","ce","cf"])
print("PASS 13_backtracking/letter_combinations (py)")
