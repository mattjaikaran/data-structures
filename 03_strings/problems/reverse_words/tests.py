import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.reverse_words.solution import reverse_words

assert reverse_words("  the sky is blue  ")=="blue is sky the"
print("PASS 03_strings/reverse_words (py)")
