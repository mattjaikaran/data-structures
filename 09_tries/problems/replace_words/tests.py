import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.replace_words.solution import replace_words

assert replace_words(["cat","bat","rat"],"the cattle was rattled by the battery") \
    == "the cat was rat by the bat"
print("PASS 09_tries/replace_words (py)")
