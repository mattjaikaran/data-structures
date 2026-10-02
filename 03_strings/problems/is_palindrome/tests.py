import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.is_palindrome.solution import is_palindrome

assert is_palindrome("A man, a plan, a canal: Panama")
assert not is_palindrome("race a car")
print("PASS 03_strings/is_palindrome (py)")
