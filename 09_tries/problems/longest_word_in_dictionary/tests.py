import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.longest_word_in_dictionary.solution import longest_word_dictionary

assert longest_word_dictionary(["w","wo","wor","worl","world"]) == "world"
assert longest_word_dictionary(["a","banana","app","appl","ap","apply","apple"]) == "apple"
print("PASS 09_tries/longest_word_in_dictionary (py)")
