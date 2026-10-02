import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.word_break.solution import word_break

assert word_break("leetcode", ["leet","code"])
assert not word_break("catsandog", ["cats","dog","sand","and","cat"])
print("PASS 12_dynamic_programming/word_break (py)")
