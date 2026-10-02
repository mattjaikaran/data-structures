import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.is_scramble.solution import is_scramble

assert is_scramble("great","rgeat") and not is_scramble("great","efta")
print("PASS 03_strings/is_scramble (py)")
