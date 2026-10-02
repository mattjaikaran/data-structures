import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.valid_palindrome_ii.solution import valid_palindrome_ii
for text in ['', 'a', 'aba', 'abca', 'deeee', 'eeeed']:
    assert valid_palindrome_ii(text)
for text in ['abc', 'abcdef']:
    assert not valid_palindrome_ii(text)
print('PASS 03_strings/valid_palindrome_ii (py)')
